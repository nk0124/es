// es ke ekma script hai je basically browser pe code ko run kerne ke bna tha 
let score=34;
const bonus=45.67;
let fname="Neeta";
let lname="Kumari";

console.log(fname,lname);
console.log(fname+" "+lname);
console.log(`${fname} ${lname}`); // template literals
console.log(`${fname} ${lname} Scored ${score} points with ${bonus} Bonus Points`);
score=score+40;
// bonus=bonus+10;
console.log(`${fname} ${lname} Scored ${score} points with ${bonus} Bonus Points`);

if(score>45){
    let addedpoints=6;
    console.log("+ Points"+addedpoints);
}

// let is a local var isko khi v access nhi ker sakte hai
let x=50;
for(let x=1;x<5;x++){
    console.log("X="+x);
}
console.log("After loop X="+x);
// var is a global isko khi v bahar access ker sakte hai
var y=100; 
for(var y=1;y<=5;y++){
    console.log("Y="+y);
}
console.log("After Loop Y="+y);