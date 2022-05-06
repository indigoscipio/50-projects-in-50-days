let btnNext = document.querySelector("#next")
let btnPrevious = document.querySelector("#previous")
let steps = document.querySelectorAll(".circle")
let progress = document.querySelector("#progress")

currentStep = 1;
totalStep = steps.length;

btnNext.addEventListener("click", () =>{

    currentStep++;

    if(currentStep > totalStep){
        currentStep = totalStep;
        console.log(`current step is ${currentStep+1}`)
    }
    update()
})

btnPrevious.addEventListener("click", () =>{

    currentStep--;
    if(currentStep < 1){    
        currentStep = 1;
        console.log(`current step is ${currentStep}`)
    }
    
    update()

})

function update(){
    steps.forEach((step, idx) => {
        if(idx < currentStep){
            step.classList.add("active");
        }
        else{
            step.classList.remove("active");
        }

        let actives = document.querySelectorAll(".active")
        progress.style.width = (((actives.length-1) / (steps.length-1)) * 100 + "%")
        console.log(progress.style.width)

    
        if(currentStep === 1){
            btnPrevious.disabled = true;
        }
        else if(currentStep === totalStep){
            btnNext.disabled = true;
        }
        else{
            btnNext.disabled = false;
            btnPrevious.disabled = false;
        }
        
    })
}
