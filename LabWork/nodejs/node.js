var user = [
    {name: 'juned'},
    {age: 24},
    {nickname: 'Aatif'},
];

console.log(user);


for(let i=0; i<15; ++i){
    if(i%3 == 0 && i%5 == 0){
        console.log('xy');
    }
    else if(i%3 == 0){
        console.log('x');
    }
    else if(i%5 == 0){
        console.log('y');
    }
    else{
        console.log(i);
    }
}
