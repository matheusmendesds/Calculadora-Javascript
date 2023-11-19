const tela=document.querySelector(".tela")
const limpar=document.querySelector(".limpar")

// let num=[...document.querySelectorAll(".numero")]
// indice=0
// num.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const b=evt.target
//         let nEle=document.createElement("var")
//         nEle.setAttribute("id","n" + indice)
//         nEle.classList.add("n")
//         nEle.innerHTML=b.innerHTML
//         indice++
//         tela.appendChild(nEle)

//     })
// })
limpar.addEventListener("click",(evt)=>{
    tela.value = ""
})

function addNumero(input){
  const displayValue = tela.value
  tela.value = displayValue + input
}

function calcular(){
    if (tela.value === '') return 

    const result = eval(tela.value)
    tela.value=result
}


