// array of objects
let students =[
    {id:1,name:"Neeta",fee:5600,course:"Python",date:"12-09-2023"},
    {id:2,name:"Neha",fee:5600,course:"Java",date:"12-09-2023"},
    {id:3,name:"Mehak",fee:4000,course:"Python",date:"12-09-2023"},
    {id:4,name:"Sakshi",fee:4500,course:"Java",date:"12-09-2022"},
    {id:5,name:"Supreet",fee:5000,course:"Python",date:"12-09-2022"}
]

for (const s of students){
    console.log(`${s.name} Enrolled for ${s.course} on ${s.date}`);
}

for (const key in students){
    console.log(`${students[key].name} Enrolled for ${students[key].course} on ${students[key].date}`)
}

for (let i=0;i<students.length;i++){
    console.log(`${students[i].name} Enrolled for ${students[i].course} on ${students[i].date}`);
}



