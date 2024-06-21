"use strict";
// console.log("Hello World");


// DOM Event handling 
document.querySelector("button").onclick = function(){
    console.log("Button Clicked");
    // alert("Button Clicked");
    var amount = document.getElementById("amount").value;
    var roi = document.getElementById("roi").value;
    var time = document.getElementById("time").value;
    console.log(amount, roi, time);

    var error = "";
    if(amount == "" || roi == "" || time == ""){
        error = "All fields are required";
    }
    else if(isNaN(amount) || isNaN(roi) || isNaN(time)){
        error = "All fields must be numbers";
    }
    else if(amount <= 0 || roi <= 0 || time <= 0){
        error = "All fields must be greater than 0";
    }
    else{
        error = "okay";
        var p = Number(amount);
        var r = Number(roi);
        var t = Number(time);

        console.log(p, r, t);

        r = r/12/100;
        t = t*12;

        console.log(p, r, t);

        let emi = p * r * (1 + r) ** t / (1 + r) ** t - 1;
        
        console.log(p, r, t, emi);
        emi = Math.round(emi);
        console.log(emi);

        let h = document.querySelectorAll("h3");
        h[0].innerHTML = `Loan Amount: ${p}`;
        h[1].innerText = `EMI: ${emi}`;
        h[2].innerHTML = `Total Payable: ${emi * t}`;
        h[3].innerText = `Total Interest: ${(emi * t) - p}`;


        // graph start
        Highcharts.chart('container', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Total Interest vs EMI'
            },
            tooltip: {
                valueSuffix: '%'
            },
            subtitle: {
                text:
                'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -40,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.2em',
                            textOutline: 'none',
                            opacity: 0.7
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            series: [
                {
                    name: 'Percentage',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Loan Amount',
                            y: p,
                        },
                        {
                            name: 'Interest',
                            sliced: true,
                            selected: true,
                            y: emi * t - p,
                        },
                        {
                            name: 'EMI',
                            y: emi
                        },
                        {
                            name: 'Total Payable',
                            y: emi * t,
                        },
                    ]
                }
            ]
        });
        // graph end
    }
    document.querySelector("p").innerHTML = error;
}