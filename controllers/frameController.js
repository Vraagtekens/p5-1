
export class FrameController{
    frame;
    fullscreenButton;
    playButton;
    versionInput;
    loopBoolean = true;

    sketchFolder;

    constructor(frame, sketchFolder){
        this.frame = frame;
        this.fullscreenButton = document.querySelector("#fullscreenButton");
        this.playButton = document.querySelector("#play-button")
        this.versionInput = document.querySelector("#version");

        this.start();
    }

    start(){
        this.fullScreenButtonEvent();
        this.playButtonEvent();

        this.frameClick();
    }

    frameClick(){
        this.frame.addEventListener("click", () => {
            loop()
            this.loopBoolean = true;
        });
    }

    playButtonEvent(){
        this.playButton.addEventListener("click", () => {
            noLoop();
            this.loopBoolean = false;
        });   
        document.addEventListener('keydown', (event) => {
            if(event.code === "Space"){
                event.preventDefault();
                if (this.loopBoolean === true){
                    noLoop(); 
                    this.loopBoolean = false;
                } else {
                    loop(); 
                    this.loopBoolean = true;
                }
                
            }
        });
    }

    fullScreenButtonEvent(){
        this.fullscreenButton.addEventListener('click', (event) => {
            this.openFullscreen()
        });
    }

    openFullscreen(){
        if (this.frame.requestFullscreen) {
        this.frame.requestFullscreen();
        } else if (this.frame.webkitRequestFullscreen) { /* Safari */
        this.frame.webkitRequestFullscreen();
        } else if (this.frame.msRequestFullscreen) { /* IE11 */
        this.frame.msRequestFullscreen();
        }
    };

    async versionOptions(){
        const template = document.querySelector("#version-option")
        const firstOption = document.querySelector("#first-option")
        for (let i = 0; i < this.sketchFolder.length; i++) {
            let sketchPath = this.sketchFolder[i].path
            let sketchName = this.sketchFolder[i].name

            if(localStorage.getItem("sketch") === sketchPath){
                firstOption.textContent = sketchName
                firstOption.value = sketchPath
            } else {
                let x = template.content.cloneNode(true);
                let option = x.querySelector(".version-option")
                
                option.textContent = sketchName
                option.value = sketchPath

                this.versionInput.append(x)
            }
        }
    }

    changeVersion(){
        this.versionInput.addEventListener("change", () => {
            const version = this.versionInput.value;
            localStorage.setItem("sketch", version);
            window.location.reload();
        })
    }

    

}