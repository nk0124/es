let colors=["Pink","Black","Purple","Yellow","Gold"];


  colors.push('Blue'); 
  colors.unshift('White'); 
  colors.push('Babypink');
  colors.unshift('Red');
  console.log(colors);
 colors.pop(); 
colors.shift();
console.log(colors);
console.log("Black ?",colors.includes('Black'))
console.log("Purple ?",colors.includes('Purple'))
let newcolors=["Cyan","Maroon","Coral"];
colors =colors.concat(newcolors)
console.log(colors);
console.log("Yellow is at :", colors.indexOf("Yellow"));
colors.sort();
console.log(colors);
colors.reverse();
console.log(colors);
let k=colors.slice(4,7)
console.log(k)
colors.splice(3,2,"Green")
console.log(colors);
let text=colors.toString()
console.log(text);






// console.log(colors);
// console.log(colors[3]);

// for(let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }

// let i=0;
// while(i<colors.length){
//     console.log(colors[i]);
//     i++;
// }

