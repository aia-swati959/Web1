document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents page reload

            const name = document.getElementById('name')?.value || "Not provided";
            const email = document.getElementById('email')?.value || "Not provided";
            const subject = document.getElementById('subject')?.value || "Not provided";
            const message = document.getElementById('message')?.value || "Not provided";
            const attachment = document.getElementById('attachment')?.files[0];

            // Correctly capturing Product ID and Rating
            const productIdElement = document.getElementById('product-id');
            const productRatingElement = document.getElementById('product-rating');

            const productId = productIdElement ? productIdElement.value : "Not provided";
            const productRating = productRatingElement ? productRatingElement.value : "Not provided";

            console.log("Form Submitted!");
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Subject: ${subject}`);
            console.log(`Message: ${message}`);
            console.log(`Product ID: ${productId}`);
            console.log(`Product Rating: ${productRating}`);

            if (attachment) {
                console.log(`File Uploaded: ${attachment.name}`);
            }

            // Google Analytics tracking (Ensure `gtag` exists)
            if (typeof gtag === 'function') {
                gtag('event', 'contact_form_submission', {
                    event_category: 'Contact Form',
                    event_label: subject,
                    value: 1,
                    user_name: name,
                    user_email: email,
                    user_message: message,
                    user_uploads: attachment ? attachment.name : 'No file uploaded',
                    product_id: productId,
                    product_rating: productRating,
                    submission_count: 1
                });
            }
        });
    }



    // Shopping Cart Functionality
    const cartCountSpan = document.querySelector('.cart-count');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updateCartCount = () => {
        cartCountSpan.textContent = cart.length;
    };

    updateCartCount();

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest(".product-card");

            if (!productCard) return;

            const product = {
                id: button.dataset.productId,
                name: productCard.querySelector("h3")?.innerText || "Unknown Product",
                price: parseFloat(productCard.querySelector(".price")?.innerText.replace("$", "") || 0)
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();

            console.log(`Added to cart: ${product.name} - $${product.price}`);

            button.textContent = "Added!";
            button.style.backgroundColor = '#5cb85c';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = "Add to Cart!";
                button.style.backgroundColor = '#4CAF50';
                button.disabled = false;
            }, 1500);
        });
    });

    // Login System
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginForm = document.getElementById("loginForm");
    const submitLogin = document.getElementById("submitLogin");

    if (loginBtn && logoutBtn && loginForm && submitLogin) {
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
            const username = document.getElementById("username")?.value || "";
            const password = document.getElementById("password")?.value || "";

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
    }
});




            
