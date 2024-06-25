var users = [
    {name:'user1',age:20},
    {name:'user2',age:20},
    {name:'user3',age:20},
]
console.log(users);

for(let i=1;i<=15;i++){
    if(i%3==0 && i%5==0){
        console.log('xy')
    }
    else if(i%3==0){
        console.log('x');
    }
    else if(i%5==0){
        console.log('y');
    }
    else{
        console.log(i);
    }
}