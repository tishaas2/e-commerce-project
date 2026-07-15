// Remove Product

const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

button.addEventListener("click", () => {

button.parentElement.parentElement.remove();

alert("Product Removed Successfully");

});

});

// Quantity Update

const quantities = document.querySelectorAll(".quantity");

quantities.forEach(input => {

input.addEventListener("change", () => {

if(input.value < 1){

input.value = 1;

}

});

});

console.log("Cart Loaded Successfully");
