const products = [

{
id:1,
name:"Smartphone",
price:49999,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},

{
id:2,
name:"Laptop",
price:79999,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
},

{
id:3,
name:"Headphones",
price:2999,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
id:4,
name:"Smart Watch",
price:5999,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
id:5,
name:"Camera",
price:25999,
image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500"
},

{
id:6,
name:"Shoes",
price:1999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
}

];

const productContainer =
document.querySelector(".products");

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product => {

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`;

});

}

displayProducts(products);

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(id){

const product =
products.find(item => item.id === id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(product.name + " added to cart");

}

function updateCartCount(){

document.getElementById("cart-count")
.innerText = cart.length;

}

function searchProducts(){

const value =
document.getElementById("searchInput")
.value.toLowerCase();

const filtered =
products.filter(product =>
product.name
.toLowerCase()
.includes(value)
);

displayProducts(filtered);

}