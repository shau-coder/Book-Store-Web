function toggleChat(){
 let b=document.getElementById("chatBox");
 b.style.display=b.style.display==="block"?"none":"block";
}

function reply(){
 let m=document.getElementById("msg").value.toLowerCase();
 let r=document.getElementById("chatReply");

 if(m.includes("search")) r.innerText="Go to Books page.";
 else if(m.includes("cart")) r.innerText="Click Add to Cart.";
 else if(m.includes("login")) r.innerText="Open Login page.";
 else r.innerText="Check Help page.";
}