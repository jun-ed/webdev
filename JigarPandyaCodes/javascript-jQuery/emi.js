"use strict";
// console.log('file connected');

// DOM event handling
document.querySelector('button').onclick = function() {
    // console.log('button clicked');
    var data1 = document.getElementById('x1').value;
    var data2 = document.getElementById('x2').value;
    var data3 = document.getElementById('x3').value;
    console.log(data1, data2 , data3);
    console.log(isNaN(data1)); // true

    var error='';
    if(data1=="" || data2=="" || data3==""){
        error = 'All Values are required';
    }
    else if(isNaN(data1) || isNaN(data2) || isNaN(data3)){
        error = 'All Values must be numbers';
    }
    else{
        error = 'ok';
        var P = Number(data1);
        var R = Number(data2);
        var N = Number(data3);

        R = R/12/100;
        N = N*12;

        var emi = P*R*(1+R)**N /((1+R)**N - 1);
        emi = Math.round(emi);

        console.log(document.querySelectorAll('h3'));

        document.querySelectorAll('h3')[0].innerHTML = `EMI: &#8377; ${emi}`;

        document.querySelectorAll('h3')[1].innerHTML = ` Loan Amount: ${P}`;

        document.querySelectorAll('h3')[2].innerHTML = ` Total Payable : ${emi*N}`;

        document.querySelectorAll('h3')[3].innerHTML = ` Total Interest : ${emi*N - P}`;

        //graph 
        Highcharts.chart('container', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Egg Yolk Composition'
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
                            name: 'LOAN AMOUNT',
                            y:P
                        },
                        {
                            name: 'INTEREST',
                            sliced: true,
                            selected: true,
                            y: emi*N - P
                        }
                        
                    ]
                }
            ]
        });
        
        //graph


    }
    document.querySelector("p").innerHTML = error;
}   