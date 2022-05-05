let btnPanel = document.querySelectorAll(".panel");

btnPanel.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active");
        console.log("clicked");
        console.log(this);
    });
})

function removeActiveClasses(){
    btnPanel.forEach(panel => {
        panel.classList.remove("active");
    })
}
