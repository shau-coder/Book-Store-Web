const c=document.getElementById("cartList");
let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.forEach(id=>{
 let b=books.find(x=>x.id===id);
 c.innerHTML+=`
  <div class="card">
   <h3>${b.title}</h3>
   <p>₹${b.price}</p>
  </div>`;
});