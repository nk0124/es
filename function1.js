// first method of function
function greet(){
    console.log("Hello,! Have A Nice Day !!!")
}

function addnums(a,b,c){
    return (a,b,c)
}

function average(a,b,c){
    return (a+b+c)/3
}

function maxmin(a,b,c){
    var x=(a>b && a>c)? a :(b>c)? b:c;
    var n=(a<b && a<c)? a :(b<c)? b:c;
    return {x,n};
   // return [x,n];
   // return Max :${x} & Min :${n};
}

let a=34.56,b=90.34,c=78.66;
greet()
console.log(`Sum of ${a},${b} and ${c} is ${addnums(a,b,c)}`)
console.log(`Average of ${a},${b} and ${c} is ${addnums(a,b,c)}`);
d=maxmin(a,b,c);
console.log(`Max value of ${a},${b} and ${c} is ${d.x}`);
console.log(`Min value of ${a},${b} and ${c} is ${d.n}`);
//console.log(`Max value of ${a},${b} and ${c} is ${d[0]}`);
//console.log(`Max value of ${a},${b} and ${c} is ${d[1]}`);
