function createMultipleDiv(){
    for(i = 0; i < 256; i++){
     const divs = document.createElement("div");
     const container = document.querySelector(".container")
     container.appendChild(divs);
     divs.setAttribute("class","multiple")
    }



    
}
createMultipleDiv();