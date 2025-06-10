document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page reload

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const productId = document.getElementById('product-id').value;
        const productRating = document.getElementById('product-rating').value;
        const attachment = document.getElementById('attachment').files[0];

        console.log("Form Submitted!");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log(`Product ID (1-6): ${productId}`);
        console.log(`Product Rating (1-10): ${productRating}`);

        if (attachment) {
            console.log(`File Uploaded: ${attachment.name}`);
        }
    });
});
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
            console.log(`Product ${productId} added to Cart`);
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
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form reload

        // Get input values
        const productId = document.getElementById('product-id').value;
        const productRating = document.getElementById('product-rating').value;

        // Log values
        console.log(`Product ID: ${productId}`);
        console.log(`Product Rating: ${productRating}`);
    });
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
// gtag event
gtag('event', 'contact_form_submission', {
                user_name: name,
                user_email: email,
                user_message: message,
                product_id: productId,
                product_rating: productRating,
                user_uploads: attachment ? attachment.name : 'No file uploaded',
                submission_count: 1
            });

document.addEventListener("DOMContentLoaded", function(){
    const ratingInput = document.getElementById("product-rating");
    if(ratingInput){
        ratingInput.addEventListener("change", function(){
            window.dataLayer = window.dataLayer|| [];
             window.dataLayer.push({
                 event: "product_rating_given",
                 rating:ratingInput.value,
                 productId:
            document.getElementById("product-id")?.value||""});
        });
    }
});

            
