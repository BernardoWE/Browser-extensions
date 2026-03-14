/* FEITO POR MIM */

// let input = document.querySelectorAll(".input")
// let label = document.querySelectorAll(".label")
// input[0].addEventListener('click', () => {
//     if (!input[0].checked === false) {
//         label[0].classList.add("bola")
//     }else{
//         label[0].classList.remove("bola")
//     }
//     if (!input[1].checked === false) {
//         label[1].classList.add("bola")
//     }else{
//         label[1].classList.remove("bola")
//     }
//     if (!input[2].checked === false) {
//         label[2].classList.add("bola")
//     }else{
//         label[2].classList.remove("bola")
//     }
// })
// input[1].addEventListener('click', () => {
//    if (!input[0].checked === false) {
//         label[0].classList.add("bola")
//     }else{
//         label[0].classList.remove("bola")
//     }
//     if (!input[1].checked === false) {
//         label[1].classList.add("bola")
//     }else{
//         label[1].classList.remove("bola")
//     }
//     if (!input[2].checked === false) {
//         label[2].classList.add("bola")
//     }else{
//         label[2].classList.remove("bola")
//     }
// })
// input[2].addEventListener('click', () => {
//     if (!input[0].checked === false) {
//         label[0].classList.add("bola")
//     }else{
//         label[0].classList.remove("bola")
//     }
//     if (!input[1].checked === false) {
//         label[1].classList.add("bola")
//     }else{
//         label[1].classList.remove("bola")
//     }
//     if (!input[2].checked === false) {
//         label[2].classList.add("bola")
//     }else{
//         label[L2].classList.remove("bola")
//     }
// })
// input.addEventListener('click', input.forEach(inp => {
//     if (inp.checked === false) {
//         console.log("false")
//     }
// })
// )
/* FEITO POR MIM */

/* FEITO POR IA */
const inputs = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".label");
const checkbox = document.getElementById("mode")
const icon = document.querySelector(".icon");
const extension = document.querySelector(".extensions")
const extensionList = document.querySelector('.extensions-list')
const container = document.querySelector('.body-container')
const svgLight = document.querySelector('.svgPath')
const darkLight = document.querySelector('.dark-light')

window.addEventListener("DOMContentLoaded", () => {
  labels[0].click();
});

checkbox.addEventListener('change', () =>{
    const checked = checkbox.checked

    if (checked === true) {
      icon.innerHTML = `
        
        <svg class="lua" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 18"><g clip-path="url(#a)"><path stroke="#091540" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>
      `;
       // cor do body
      container.classList.add('container-light')

      // Cor do background da div do svg extensions
      extension.classList.add('extensions-light')

      // Titulo
      extensionList.classList.add('extensionsList-light')

      // svg extensions
      svgLight.classList.add('svg-light')

      // Botao all, active, inactive
      labels.forEach(label => label.classList.add('label-light'))

      // cada card
      document.querySelectorAll(".card").forEach(card => {
       card.classList.add("card-light") //"#fff";

      // botao de remover
       let buttonRemove = document.querySelectorAll(".button-remove")
       // const inputActives = document.querySelector(".check-active-inactive")
      // console.log(inputActives)
      buttonRemove.forEach(btnRemove => {
      btnRemove.classList.add("button-light")}) 

      // background do icone de modo claro - escuro
      darkLight.classList.add('icon-light')
});
  } 
  else{
        icon.innerHTML = `
        
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 18"><g clip-path="url(#a)"><path stroke="#FBFDFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>
      `
      // cor do body
      container.classList.remove('container-light')

      // Cor do background da div do svg extensions
      extension.classList.remove('extensions-light')

      // Titulo
      extensionList.classList.remove('extensionsList-light')

      // svg extensions
      svgLight.classList.remove('svg-light')

      // Botao all, active, inactive
      labels.forEach(label => label.classList.remove('label-light'))

      // cada card
      document.querySelectorAll(".card").forEach(card => {
      card.classList.remove("card-light")}) //"#fff";
     
      // botao de remover
      let buttonRemove = document.querySelectorAll(".button-remove")
      buttonRemove.forEach(btnRemove => {
      btnRemove.classList.remove("button-light")}) //"#fff";

      // background do icone de modo claro - escuro
      darkLight.classList.remove('icon-light')
        }
      
    
})


inputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    // Remove a classe de todos os labels
    labels.forEach(label => label.classList.remove("bola"));
    
    // Adiciona a classe apenas ao label do input clicado
    labels[index].classList.add("bola");
  });
});
/* FEITO POR IA */
    
   



fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("extensions-container");

    data.forEach(extension => {
      const card = document.createElement("div");
      card.classList.add("card");
      
      
      card.innerHTML = `
        <div class="bunda">
          <img src="${extension.logo}" alt="${extension.name}" class="logo">
          <div class="text">
              <h3 class="name">${extension.name}</h3>
              <p class="description">${extension.description}</p>
          </div>
        </div>
        
       
        
        <div class="button-js">
          <button type="button" class="button-remove">Remove</button>
          <label class="switch">
            <input type="checkbox" class="check-active-inactive">
            <span class="slider"></span>
          </label>
        </div>
      `;
      const checkbox = card.querySelector(".check-active-inactive");
      checkbox.checked = extension.isActive;
      /* FEITO POR IA COM BASE NO CODIGO FEITO POR MIM */
     labels.forEach((label, index) => {
      label.addEventListener("click", () => {
        if (index === 0 || (index === 1 && extension.isActive) || (index === 2 && !extension.isActive)
      ) {
          card.classList.remove("card-none");
      } else {
          card.classList.add("card-none");
      }
    });
    });
    /* FEITO POR IA COM BASE NO CODIGO FEITO POR MIM */
    
    /* FEITO POR MIM */
      // labels[0].addEventListener('click', () =>{
      //     card.classList.remove("card-none")
      // })
      // labels[1].addEventListener('click', () =>{
      //   if (extension.isActive === false ) {
      //     card.classList.add("card-none")
      //   }else{card.classList.remove("card-none")}
      // })
      //  labels[2].addEventListener('click', () =>{
      //   if (extension.isActive === true ) {
      //     card.classList.add("card-none")
        
      //   }else{card.classList.remove("card-none")}
      // })
    /* FEITO POR MIM */

    /* NAO FUNCIONA EXATAMENTE */
    //   checkbox.addEventListener("click", () => {
    //     if (inputs[1].checked === true) {
    //     card.classList.add("card-none")
    //   }else{
    //     card.classList.remove("card-none")
    //   }
    //   if (inputs[1].checked === false) {
    //     card.classList.add("card-none")
    //   }else{
    //     card.classList.remove("card-none")
    //   }
        
    //   // extension.isActive = checkbox.checked;
      
    // });/* NAO FUNCIONA EXATAMENTE */
      
      container.appendChild(card);
    });
  });