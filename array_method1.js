// foreach,filter,map,reduce,find,findIndex
let colors=["Red","Purple","Yellow","Gold","Orange","Brown","Blue"]
let numbers=[34,76,87,56,90,74,12,83]

// for each 
numbers.forEach((v)=>console.log(v))
colors.forEach((v,i)=>console.log(`${i}--${v}`))

// fliter 
let res1=numbers.filter((n)=>n>40 && n<60)
let res2=numbers.filter((n)=>n%2==0)
console.log(`Filter results2 :${res1}`)
console.log(`Filter results2 :${res2}`)

let res4=colors.filter((c)=>c.length>=5 && c.endsWith('e'))
let res5=colors.filter((c)=>c.startsWith('G'))
let res6=colors.filter((c)=>c.endsWith('e'))
let res7=colors.filter((c)=>c.includes('o'))
console.log(`Filter results2 :${res4}`)
console.log(`Filter results2 :${res5}`)
console.log(`Filter results2 :${res6}`)
console.log(`Filter results2 :${res7}`)

let res8=numbers.map((n)=>n*6)
console.log(`Mapping results8:${res8}`)

let res9=numbers.map((n)=>n*n*n)
console.log(`Mapping results8:${res9}`)

let res10=numbers.map((n)=>n/3.1)
console.log(`Mapping results8:${res10}`)

let res11=colors.map((c)=>c.toUpperCase())
console.log(`Mapping results8:${res11}`)
let res12=colors.map((c)=>c.slice(0,4))
console.log(`Mapping results8:${res12}`)












