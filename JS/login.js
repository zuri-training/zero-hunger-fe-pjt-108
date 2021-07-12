function menuBar(){
    const bar = document.getElementById("left-right-nav");
    const menu = document.querySelector("menu-bar");
    if (bar.className === "right") {
      bar.className += menu;  
    } else{
      bar.className = "right";  
  
    }
  }
  