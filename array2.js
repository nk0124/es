let colours=["Red","Purple","Gold","Brown","Green"]
for (const key in colours){
    console.log(key)
    console.log(colours[key])
}

for (const i of colours){
    console.log(i)
}

let students =[
    {id:1,name:"Neeta",fee:5600,course:"Python",date:"12-09-2023"},
    {id:2,name:"Neha",fee:5600,course:"Java",date:"12-09-2023"},
    {id:3,name:"Mehak",fee:4000,course:"Python",date:"12-09-2023"},
    {id:4,name:"Sakshi",fee:4500,course:"Java",date:"12-09-2022"},
    {id:5,name:"Supreet",fee:5000,course:"Python",date:"12-09-2022"}
]
 for (const key in students){
    console.log(students[key].name,students[key].course)
 }

 for (const i of students){
    console.log(i.name,i.course)
 }