var username="Juned";
let age=14;
let juned = "Aatif";
let ch = '57';
let a = 2;
let b = 5;
console.log(username , age , juned, ch);
console.log(typeof username, typeof age, typeof juned, typeof ch); 
console.log(a**b);

// comparison operators

console.log(username == juned);
console.log(username === juned);
console.log(username != juned);
console.log(username !== juned);
console.log(username > juned);

// creating array
var brands = ["Apple", "Samsung", "Nokia"];

console.log(brands.toString());

document.write( `
    <h1> ${username} </h1>
    <ul>
        <li> ${username} </li>
        <li> ${age} </li>
        <li> ${juned} </li>
    </ul>
    
    <h1> Brands </h1>
    <ul>
        <li> ${brands[0]} </li>
        <li> ${brands[1]} </li>
        <li> ${brands[2]} </li>
    </ul>
    
` );

// real life example of map/ objects
var products = {
    name: "Laptop",
    price: 50000,
    brand: "Apple",
    color: "Black",
    ram: "8GB",
    storage: "256GB",
    display: "15.6 inch",
    camera: "12MP",
    processor: ["i5", "i7", "i9", "i11"],
    battery: "10000mAh",
    os: "Windows 11"
};
console.log(products);

document.write(`
    
    <div class="card">
        <h1> ${products.name} </h1>
        <p> ${products.price} </p>
        <p> ${products.brand} </p>
        <p> ${products.color} </p>
        <p> ${products.ram} </p>
        <p> ${products.storage} </p>
        <p> ${products.display} </p>
        <p> ${products.camera} </p>
        <p> ${products.processor.join(" , ")} </p>
        <p> ${products.battery} </p>
        <p> ${products.os} </p>
        <button> Buy Now </button>
    </div>

    `);

    // looping example

    var amount = 153000;
    var roi = 7.1/100;
    var opening_balance = 0;
    for(let i = 1; i <= 15; i++){
        let interest = (opening_balance + amount) * roi;
        
        let closing_balance = (opening_balance + amount) + interest;
        
        interest = Math.round(interest);

        console.log(i, Math.round(opening_balance), interest, Math.round(closing_balance));
        document.write(`
                <div class="dick">

                    <div class="dic card">
                        <h1> ${i} </h1>
                        <p>Opening Balance = ${Math.round(opening_balance)} </p>
                        <p>Rate of Interast = ${interest} </p>
                        <p>closing Balance = ${Math.round(closing_balance)} </p>
                    </div>

                 </div>
            `);
        
        opening_balance = closing_balance;
    }
    


    // js functions

    // function defination
    function homeloan(amount, roi){
        let interest = (amount * roi)/100;
        let closing_balance = amount + interest;
        return closing_balance;
    }

    // function call
    let closing_balance = homeloan(150000, 7.1);
    console.log(closing_balance);

    // h/w assignment date of birth
    function date_of_birth(dob){
        // day, month, year
        // calculating age based on value of date of birth
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();
        let day = today.getDay();

        // getting the day, month, year from date of birth
        let dobDay = dob.split("/")[0];
        let dobMon = dob.split("/")[1];
        let dobYr = dob.split("/")[2];       
        
        let age = year - dobYr;
        if(month < dobMon){
            age--;
        }
        else if(month == dobMon){
            if(day < dobDay){
                age--;
            }
        }
        return age;
    }

    var total_age = date_of_birth("20/02/2000");

    console.log(total_age);


    // anonymous function
    // function without name is called anonymous function
    let sum = function(a, b){
        return a + b;
    }
    console.log(sum(10, 20));
    console.log(typeof sum);
    

    // arrow function
    let sub = (a, b) => {
        return a - b;
    }
    console.log(sub(10, 20));
    console.log(typeof sub);