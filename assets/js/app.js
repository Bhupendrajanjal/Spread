var cl = console.log;
const spread = document.getElementById("spread");
//i know that then get value = [let text = spread.innertext];

// let text = spread.innerText;
// // cl(text) // then converted into array
// let Array = [...text];
// // cl(Array)

// let spreads = Array.map(ele=>{
//     return `<span>${ele}</span>`
// })
// cl(spreads)

// let str = spreads.join("");
// cl(str)

// spread.innerHTML= str

spread.innerHTML=[...spread.innerText].map(ele=>`<span>${ele}</span>`).join("")