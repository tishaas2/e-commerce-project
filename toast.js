// =======================
// Toast Notification
// =======================

function showToast(message,type="success"){

const toast=document.getElementById("toast");

toast.className="";

toast.classList.add(type);

toast.innerHTML=message;

toast.style.display="block";

setTimeout(()=>{

toast.style.animation="slideOut .4s ease";

},2500);

setTimeout(()=>{

toast.style.display="none";

toast.style.animation="slideIn .4s ease";

},3000);

}
