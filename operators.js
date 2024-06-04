
const average=(a,b,c)=>(a+b+c)/3
console.log(average(45,67,88))

let nums =[48,67,82]
// console.log(average(num[0],num[1],num[2]))
console.log(average(...nums)) 

let mynums=[60,89,43];
mynums.push(...nums) 
console.log(mynums)
