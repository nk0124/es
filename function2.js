
 const greet =function (){
    console.log("Hello,! Have A Nice Day !!!")
}

const addnums=function(a,b,c){
    return (a,b,c)
}

const average=function(a,b,c){
    return (a+b+c)/3
}

const maxmin=function(a,b,c){
    var x=(a>b && a>c)? a :(b>c)? b:c;
    var n=(a<b && a<c)? a :(b<c)? b:c;
    return {x,n};
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
