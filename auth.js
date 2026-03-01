function signup(){
 let u=user.value;
 let p=pass.value;
 localStorage.setItem(u,p);
 alert("Account created");
}

function login(){
 let u=user.value;
 let p=pass.value;
 if(localStorage.getItem(u)===p){
   alert("Login successful");
   location="index.html";
 }else alert("Invalid login");
}