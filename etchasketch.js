function createMultipleDiv(){
    for(i = 0; i < 256; i++){
     const divs = document.createElement("div");
     const container = document.querySelector(".container")
     container.appendChild(divs);
     divs.setAttribute("class","multiple")
    }};
    createMultipleDiv();
    const container = document.querySelector(".container")
    const divs = document.querySelectorAll(".multiple")
    divs.forEach(div => div.addEventListener("mouseover", function(e){
        div.classList.add("hovering");
    }));

   const btn = document.querySelector(".reset")
   btn.addEventListener("click", function(e){
    const input = prompt("How many number of grids do you want?");
    const collection = document.querySelectorAll('.multiple');
    for (let i = 0; i < collection.length; i++) {
    const elem = collection[i];
    elem.parentNode.removeChild(elem);
    }
    const num = parseInt(input);
    function createMultipleDiv1(){
        for(i = 0; i < num*num; i++){
         const divs = document.createElement("div");
         const container = document.querySelector(".container")
         container.appendChild(divs);
         divs.setAttribute("class","multiple")
        }};
        createMultipleDiv1();
        const divs = document.querySelectorAll(".multiple")
    divs.forEach(div => div.addEventListener("mouseover", function(e){
        div.classList.add("hovering");
    }));})