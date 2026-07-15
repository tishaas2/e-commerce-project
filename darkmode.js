// ==========================
// Dark Mode
// ==========================

const darkBtn = document.getElementById("darkModeBtn");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    if(darkBtn){
        darkBtn.innerHTML="☀ Light Mode";
    }

}

// Toggle Theme

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

darkBtn.innerHTML="☀ Light Mode";

}
else{

localStorage.setItem("theme","light");

darkBtn.innerHTML="🌙 Dark Mode";

}

});

}
