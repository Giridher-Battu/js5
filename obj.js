let UI = "";
const Tectoro = {
  java: "team a",
  python: "team b",
  dotNet:`team c`,
  uI: [
    {name:"adhithya", skills:["html", "css", "javaScript","angular"]},
    {name:"sachin", skills:["javascript", "angular", "node", "react"]},
    {name:"GIri", skills:["html", "css"," javascript","node"]}
  ]
}

for (let x in Tectoro.uI) {
  UI +=  Tectoro.uI[x].name +" "  ;
  for (let y in Tectoro.uI[x].skills) {
    UI += Tectoro.uI[x].skills[y] + " " ;
  }
}
console.log(UI);
