function createMultipleDiv(){
    for(i = 0; i > 256; i++){
     const div = document.createElement("div");
     const container = document.querySelector(".container")
     container.appendChild(div);
     div.setAttribute("class","multiple")
    }
    
}
createMultipleDiv();