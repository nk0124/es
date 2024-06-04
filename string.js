let text="Learning Javascript and Node JS"
console.log(text);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);
console.log(text.endsWith('JS'));
console.log(text.startsWith('I'));
console.log(text.includes('J'));
console.log(text.indexOf('a'));
console.log(text[3]);
console.log(text.charAt(5));

let k=text.concat(" !!!")
console.log(k);

console.log(text.replace('a','@'));
console.log(text.repeat(2));
console.log(text.slice(9,19));
console.log(text.substring(0,19));
console.log(text.split(' '));
console.log(text.search('a'));

let days="Mon,Tue,Wed,Thus,Fri";
let days_a=days.split(",");
console.log(days_a)
let days_s=days_a.toString()
console.log(days_s)

let f="Komaldeep"
let l="Singh"
console.log(f.padStart(10))
console.log(l.padStart(15))
console.log(f.padEnd(15,'.'),l)
