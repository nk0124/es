let stu={name:"Neeta",fee:5600,course:"Python",date:"12-09-2023",duration:"two months"}
for (const  key in  stu){
    console.log(key.toUpperCase().padEnd(10)+":"+stu[key])
}