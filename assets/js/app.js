var cl = console.log;
const spread = document.getElementById("spread");
// let text = spread.innerText
// cl(text)
// let arr = [...text];
// cl(arr)
// let speandArr = arr.map(ele=>{
//     return `<span>${ele}</span>`
// })

// cl(speandArr)

// let speandHtml = speandArr.join("");
// cl(speandHtml)
// spread.innerHTML = speandHtml

//firstly get the spread then convert 
spread.innerHTML= [...spread.innerText].map(ele=>`<span>${ele}</span>`).join("");