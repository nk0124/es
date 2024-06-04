// spread ko calling time use kerte hai iski satring hoti hai ... ke sath let suppose two array hai uske elements ko milaker ek array 
// bnaya hai spread op. ka use hum two array ke elements ko open or spread kerne ke kerte hai 
const average=(a,b,c)=>(a+b+c)/3
console.log(average(45,67,88))

let nums =[48,67,82]
// console.log(average(num[0],num[1],num[2]))
console.log(average(...nums)) // spread

let mynums=[60,89,43];
mynums.push(...nums) // spread
console.log(mynums)