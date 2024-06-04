let colors=["Red","Pink","Yellow","Gold","Orange"];
let numbers=[34,67,23,78,83,12,46]
//white for (forof forin)-object&array of object foreach

console.log("With While Loop")
let i=0;
while(i<colors.length){
    console.log(colors[i]);
    i++;
}

console.log("With For Loop")
for (let index=0;index<colors.length;index++){
    console.log(colors[index]);
}

console.log("With Forof Loop")
for(let color of colors){
    console.log(color)
}

console.log("With While Loop")
let x=0;
while(x<colors.length){
    console.log(numbers[x]);
    i++;
}

console.log("With For Loop")
for(let x=0;x<numbers.length;x++){
    console.log(numbers[x])
}

console.log("With Forof Loop")
for(let num of numbers){
    console.log(numbers[x])
}


