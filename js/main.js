//Matn in JS

//let round = Math.round(8.6)                      Yaxlitlash   - 1
//let pow = Math.pow(5,5); 5*5*5*5*5               Darajasini hisoblash
//let sqrt = Math.sqrt(225);                       Ildizini topish 
//let abs = Math.abs(-12.8);                       Absolute sonini chiqarish
//let ceil = Math.ceil(49.9);                      Yaxlitlash   -2
//let floor = Math.floor(49.9)                     Yaxlitlash   -3
//let min = Math.min(16,300,2010,14,329,1971);     Minimal soni topish
//let max = Math.max(16,300,2010,14,329,1971);     Maximal soni topish
//let trunc Math.trunc(49.9);                      Yaxlitlash   -3
//document.write(trunc);


let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
//let byClass = document.getElementsByClassName("classNomi");
let bySelector = document.querySelector(".classNomi");
let bySelectorALL = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");
let byClass = document.getElementsByClassName("classboshi");

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.width = "350px";
byAll.style.height = "200px";
byAll.style.border = "5px solid grey";
byAll.style.textAlign = "center";
byAll.style.paddingTop = "70px";
byAll.style.boxSizing = "border-box";
byAll.style.textTransform = "uppercase";

console.log(byAll);