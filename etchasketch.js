function createMultipleDiv(){
    for(i = 0; i < 256; i++){
     const divs = document.createElement("div");
     const container = document.querySelector(".container")
     container.appendChild(divs);
     divs.setAttribute("class","multiple")
    }};
    createMultipleDiv();

    const divs = document.querySelectorAll(".multiple")
    divs.forEach(div => div.addEventListener("mouseover", function(e){
        div.classList.add("hovering");
    }));


    
