// rest opr
// rest opr ko hum define hum arrow fun. ke arguments mai kerte hai .running time pe hum arrguments pass kerte hai 
// vo baad mai rest opr ki wajh se ek array create ho jata hai .
let total=(...nums)=>{
    console.log(nums)
    let s = 0;
    for (const n of nums){
        s=s+n;
    }
    return(s)
}

console.log(total(4,5,7,8,9))