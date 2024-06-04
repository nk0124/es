
let total=(...nums)=>{
    console.log(nums)
    let s = 0;
    for (const n of nums){
        s=s+n;
    }
    return(s)
}

console.log(total(4,5,7,8,9))
