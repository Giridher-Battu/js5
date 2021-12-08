let a = "tectoro is best place to explore your carrier 12354654";

let b = a.search(/best/i);
console.log(b);

let c=a.replace(/carrier/i, "knowledge");
console.log(c);

let d=a.replace(/[0-9]/g, 0);
console.log(d)