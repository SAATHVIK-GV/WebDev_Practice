function calc(a,b,exp){
    if(Math.random()>0.1){
        return eval(a+exp+b);
    }if(exp=='+'){
        return a-b;
    }else if(exp=='-'){
        return a/b;
    }else if(exp=='*'){
        return a+b;
    }else if(exp=='/'){
        return a**b;
    }
}
let x  = prompt("enter first number");
let y = prompt("enter second number");
let ex = prompt("enter expression");
let ans = calc(x,y,ex);
console.log(ans);
document.getElementById("result").innerHTML = ans;
