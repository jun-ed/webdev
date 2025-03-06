import { useState, useEffect } from "react";

function App() {
  const initialAmbulances = [
    { id: 1, status: "Available", crew: "Team A" },
    { id: 2, status: "On Call", crew: "Team B" },
  ];
  const initialCalls = [];

  const [ambulances, setAmbulances] = useState(() => {
    const saved = localStorage.getItem("ambulances");
    return saved ? JSON.parse(saved) : initialAmbulances;
  });
  const [calls, setCalls] = useState(() => {
    const saved = localStorage.getItem("calls");
    return saved ? JSON.parse(saved) : initialCalls;
  });

  useEffect(() => {
    localStorage.setItem("ambulances", JSON.stringify(ambulances));
    localStorage.setItem("calls", JSON.stringify(calls));
  }, [ambulances, calls]);

  const toggleStatus = (id) => {
    setAmbulances((prev) =>
      prev.map((amb) =>
        amb.id === id
          ? {
              ...amb,
              status: amb.status === "Available" ? "On Call" : "Available",
            }
          : amb
      )
    );
  };

  const handleAddCall = (e) => {
    e.preventDefault();
    const form = e.target;
    const newCall = {
      id: Date.now(),
      patient: form.patient.value,
      location: form.location.value,
      status: "Active",
      assignedAmbulanceId: null,
    };
    setCalls((prev) => [...prev, newCall]);
    form.reset();
  };

  const assignAmbulance = (callId, ambulanceId) => {
    setCalls((prev) =>
      prev.map((call) =>
        call.id === callId ? { ...call, assignedAmbulanceId: ambulanceId } : call
      )
    );
    setAmbulances((prev) =>
      prev.map((amb) =>
        amb.id === parseInt(ambulanceId) ? { ...amb, status: "On Call" } : amb
      )
    );
  };

  const completeCall = (callId) => {
    const call = calls.find((c) => c.id === callId);
    setCalls((prev) =>
      prev.map((c) => (c.id === callId ? { ...c, status: "Completed" } : c))
    );
    setAmbulances((prev) =>
      prev.map((amb) =>
        amb.id === call.assignedAmbulanceId ? { ...amb, status: "Available" } : amb
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Ambulance Management System</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Ambulance Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="bg-gray-100 p-4 rounded-t-lg">
            <h2 className="text-xl font-semibold">Ambulances</h2>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crew</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ambulances.map((amb) => (
                    <tr key={amb.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{amb.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            amb.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {amb.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{amb.crew}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleStatus(amb.id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          {amb.status === "Available" ? "Set to On Call" : "Set to Available"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Emergency Calls Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="bg-gray-100 p-4 rounded-t-lg">
            <h2 className="text-xl font-semibold">Emergency Calls</h2>
          </div>
          <div className="p-4">
            <form onSubmit={handleAddCall} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                <input name="patient" className="mt-1 block w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input name="location" className="mt-1 block w-full p-2 border rounded" required />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Call
              </button>
            </form>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {calls.map((call) => (
                    <tr key={call.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{call.patient}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{call.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            call.status === "Active" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {call.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {call.status === "Active" && !call.assignedAmbulanceId ? (
                          <select
                            onChange={(e) => assignAmbulance(call.id, e.target.value)}
                            className="block w-full p-2 border rounded"
                          >
                            <option value="">Select Ambulance</option>
                            {ambulances
                              .filter((amb) => amb.status === "Available")
                              .map((amb) => (
                                <option key={amb.id} value={amb.id}>
                                  Ambulance {amb.id}
                                </option>
                              ))}
                          </select>
                        ) : call.status === "Active" && call.assignedAmbulanceId ? (
                          <div className="flex items-center space-x-2">
                            <span>Ambulance {call.assignedAmbulanceId}</span>
                            <button
                              onClick={() => completeCall(call.id)}
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              Complete
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-500">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;