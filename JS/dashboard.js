const navigationBar = document.getElementById("navBar")
const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("options")
const main =document.getElementById("main")

hamburger.addEventListener('click', function(){
    if (menu.style.display!=="none"){
        navigationBar.style.width="4vw"
        navigationBar.style.backgroundColor="#FFFFFF"
        menu.style.display="none"
        main.style.width="96vw"
    }
    else {
        navigationBar.style.width="268px"
        navigationBar.style.backgroundColor="#27B46E"
        menu.style.display="grid"
        main.style.width="unset"
        console.log("jd")
    }
})