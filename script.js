function showPopup(productName){
    alert("Product Id" + productName +"has been added to your cart!");}
    document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".add-to-cart-btn");
    buttons.forEach(button=>{
        button.addEventListener("click", function(){
            const productName = button.getAttribute("data-product-id");
            showPopup(productName);
        });
        )};
)};

    document.addEventListener('DOMContentLoaded',()=>{
    const addToCartButtons = 
    document.querySelectorAll('.add-to-cart-btn');
    const cartCountSpan =
    document.querySelector('.cart-count');
    let cartItemCount= 0;

    const updateCartCount =() => {
        cartCountSpan.textContent = cartItemCount;
    };

    addToCartButtons.forEach(button =>{
         button.addEventListener('click',() => {
            const productId = button.dataset.productId;
            console.log('Product ${productId} added to Cart');
            cartItemCount++;
            updateCartCount();
            button.textContent ="Added!";
            button.style.backgroundColor = '#5cb85c';
            button.disabled =true;

            setTimeout(() => {
            button.textContent ="Add to Cart!";
            button.style.backgroundColor = '#4CAF50';
            button.disabled = false;
            },1500);
         });
         
    });

    updateCartCount();
    const contactForm =
    document.querySelector('.contact-form');
    if(contactForm){
        contactForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            alert('Contact Form Submitted!');
        });
    }
});




document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginForm = document.getElementById("loginForm");
  const submitLogin = document.getElementById("submitLogin");
  if(!loginBtn|| !logoutBtn|| !loginForm|| !submitLogin) return;

  // Check login state
  if (localStorage.getItem("isLoggedIn") === "true") {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }

  loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
  });

  submitLogin.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple dummy login
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      loginForm.style.display = "none";
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    alert("Logged out successfully");
  });
});
