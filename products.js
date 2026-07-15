// Product Data
const products = [
{
    name: "iPhone 15",
    category: "Mobiles",
    price: 79999
},
{
    name: "Samsung Galaxy S24",
    category: "Mobiles",
    price: 69999
},
{
    name: "HP Laptop",
    category: "Laptops",
    price: 54999
},
{
    name: "Dell Inspiron",
    category: "Laptops",
    price: 62999
},
{
    name: "Boat Headphones",
    category: "Headphones",
    price: 2499
},
{
    name: "Sony Headphones",
    category: "Headphones",
    price: 6999
},
{
    name: "Nike Shoes",
    category: "Shoes",
    price: 4999
},
{
    name: "Adidas Shoes",
    category: "Shoes",
    price: 3999
}
];

// Search Function
const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

let title = card.querySelector("h5").innerText.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

}

// Category Filter

const category = document.getElementById("category");

if(category){

category.addEventListener("change",function(){

let selected = this.value;

let cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

let title = card.querySelector("h5").innerText;

if(selected==="All Categories"){
card.style.display="block";
}
else if(title.includes("iPhone") || title.includes("Samsung")){

card.style.display = selected==="Mobiles" ? "block":"none";

}
else if(title.includes("Laptop") || title.includes("Dell")){

card.style.display = selected==="Laptops" ? "block":"none";

}
else if(title.includes("Headphones")){

card.style.display = selected==="Headphones" ? "block":"none";

}
else if(title.includes("Shoes")){

card.style.display = selected==="Shoes" ? "block":"none";

}

});

});

}

// Wishlist

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("dblclick",()=>{

alert("❤️ Added to Wishlist");

});

});

// Add To Cart Button

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("click",()=>{

alert("🛒 Product Added to Cart");

});

});

console.log("Products Loaded Successfully");
