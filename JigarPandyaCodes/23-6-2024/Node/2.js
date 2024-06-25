// closure in javascript
/*
    closure is a Inner function that has access to variables from its outer function
*/
function f1(a){
    var m=1000;
    return function(b){
        return function(c){
            return a+b+c+m;
        }
    }
}
var ans = f1(100)(200)(300); // currying effect
console.log(ans);