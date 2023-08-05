function createMultipleDiv(){
    for(i = 0; i > 256; i++){
     const div = document.createElement("div");
     div.style.cssText = "background-color:blue;"
     const container = document.querySelector(".container")
     container.appendChild(div);
    }
    
}
createMultipleDiv();