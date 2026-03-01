const list=document.getElementById("bookList");

books.forEach(b=>{
 list.innerHTML+=`
  <div class="card">
   <h3>${b.title}</h3>
   <p>${b.author}</p>
   <p>₹${b.price}</p>
   <button class="btn" onclick="addCart(${b.id})">Add to Cart</button>
   <button class="btn" onclick="addWish(${b.id})">Wishlist</button>
  </div>`;
});

function addCart(id){
 let cart=JSON.parse(localStorage.getItem("cart"))||[];
 cart.push(id);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Added to cart");
}

function addWish(id){
 let w=JSON.parse(localStorage.getItem("wish"))||[];
 w.push(id);
 localStorage.setItem("wish",JSON.stringify(w));
 alert("Added to wishlist");
}