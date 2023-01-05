import {MainController} from "./controllers/mainController.js"

window.onload = async function() {
    //MainController only gets loaded if frame is not in an iframe
    if(window.location === window.parent.location){
        const mainController = new MainController();
            
    } else {
        iframe();
    }
};

//iframe is true remove everything but the sketch
function iframe(){
    const frameBox = document.querySelector(".main-frame-box");
    const frame = document.querySelector("#frame");
    const iframePlace = document.querySelector("#iframePlace")

    iframePlace.appendChild(frame)
    frameBox.remove()
}




function loadJS() {
    let scriptEle = document.createElement("script");
    
    if(window.location === window.parent.location){
        if (localStorage.getItem("sketch") === undefined){
            scriptEle.setAttribute("src", "./sketches/sketch-2.js");
            localStorage.setItem("sketch", "./sketches/sketch-2.js");
        } else {
            scriptEle.setAttribute("src", localStorage.getItem("sketch"));
        }
       
    }else{
        scriptEle.setAttribute("src", "./sketches/sketch-2.js");
    }
    
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
}
  
loadJS();


