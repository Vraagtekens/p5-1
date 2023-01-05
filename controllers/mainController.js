import { FrameController } from "./frameController.js";

export class MainController{
    //views
    frame;
    frameTitle;
    sketchScript;
    fileSelect;

    repoName;
    repoData;
    sketchFolder;
    modelFolder;
    code;

    frameController;

    constructor(){
        this.repoName = "p5-1"
        this.frame = document.querySelector("#frame");
        this.frameTitle = document.querySelector(".frame-title")
        this.sketchScript = document.querySelector("#sketch-script")
        this.fileSelect = document.querySelector("#file-select")

        this.start();
    }

    async start(){

        this.frameController = new FrameController(this.frame, this.sketchFolder)
        this.setFileOption();
    }

    //content-code
    setTitle(){
        document.title = this.repoName
        this.frameTitle.textContent = this.repoName
    }
    
    setCode(){
        document.querySelector("#code-content").textContent = this.code;

        //highlight code
        hljs.highlightAll(); 
        hljs.initLineNumbersOnLoad();
    }

    setFileOption(){
        const template = document.querySelector("#code-title-template");
        for (let i = 0; i < this.modelFolder.length; i++) {

            let x = template.content.cloneNode(true);
            let option = x.querySelector(".code-title")
            
            option.textContent = this.modelFolder[i].name
            option.value = this.modelFolder[i].path

            this.fileSelect.append(option)
        }
    }
    

}