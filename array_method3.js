 // reduce method of array
 let numbers=[34,56,78,23,89,76,45,12]
 // let s = 0;
 // for (const n of numbers){
// s = s+n;
 // }
 // console.log(s)

 console.log(numbers.reduce((x,n)=>x+n))
 
 console.log(numbers.reduce((x,n)=>x*n))
 console.log(numbers.reduce((x,n)=>n>x))
 
