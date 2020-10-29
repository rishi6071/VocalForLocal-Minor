console.log('Indian Product - Vocal for local');


// Product Details
const products = document.querySelectorAll('.product-grid');
products.forEach((product, id) => {
    product.onclick = () => {
        location.href = "productdetail.html";
    }
});


// Switching of Login and Signup Form
const switchToSignup = () => {
    document.querySelector('#login_section').style.display = "none";
    document.querySelector('#signup_section').style.display = "block";
}
const switchToLogin = () => {
    document.querySelector('#signup_section').style.display = "none";
    document.querySelector('#login_section').style.display = "block";
}


// Product Toggling
let menuItems = document.getElementById('menu-item');
menuItems.style.maxHeight = "0px";

function menutoggle() {
    if (menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px';
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}

// Business Login Signup Switching
function businessLoginSignup(target) {

    if (target === "signup") {
        document.querySelector('#business_login_section').style.display = "none";
        document.querySelector('#business_login_link').style.borderBottom = "none";
        document.querySelector('#business_login_link').style.color = "#00838f";

        document.querySelector('#business_signup_section').style.display = "block";
        document.querySelector('#business_signup_link').style.borderBottom = "3px solid grey";
        document.querySelector('#business_signup_link').style.color = "rebeccapurple";
    }
    else if (target === "login") {
        document.querySelector('#business_signup_section').style.display = "none";
        document.querySelector('#business_signup_link').style.borderBottom = "none";
        document.querySelector('#business_signup_link').style.color = "#00838f";

        document.querySelector('#business_login_section').style.display = "block";
        document.querySelector('#business_login_link').style.borderBottom = "3px solid grey";
        document.querySelector('#business_login_link').style.color = "rebeccapurple";
    }
}