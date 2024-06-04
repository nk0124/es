let students =[
    {id:1,name:"Neeta",fee:5600,course:"Python",date:"12-09-2023"},
    {id:2,name:"Neha",fee:5600,course:"Java",date:"12-09-2023"},
    {id:3,name:"Mehak",fee:4000,course:"Python",date:"12-09-2023"},
    {id:4,name:"Sakshi",fee:4500,course:"Java",date:"12-09-2022"},
    {id:5,name:"Supreet",fee:5000,course:"Python",date:"12-09-2022"}
]
students.forEach((x)=>console.log(x))
students.forEach((x)=>console.log(`${x.name} Paid ${x.fee} INR for ${x.course} Course on ${x.date}`))

let stu1=students.filter((x)=>x.fee>5000);
let stu2=students.filter((x)=>x.course=="Java")
console.log(stu1)
console.log(stu2)

stu1.forEach((x)=>console.log(`${x.name} Paid ${x.fee} INR for ${x.course} Course on ${x.date}`))
console.log('/n')
stu2.forEach((x)=>console.log(`${x.name} Paid ${x.fee} INR for ${x.course} Course on ${x.date}`))

let st=students.find((x)=>x.name=="Mehak")
console.log(st)
let st2=students.findIndex((x)=>x.name=="Neha")
console.log(st2)