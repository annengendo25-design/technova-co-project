const productCards = document.querySelectorAll(".product-card");

const productModal = document.getElementById("productModal");

const closeModal = document.getElementById("closeModal");


productCards.forEach(function(card) {

    card.addEventListener("click", function() {

        productModal.style.display = "flex";

    });

});


closeModal.addEventListener("click", function() {

    productModal.style.display = "none";

});


productModal.addEventListener("click", function(event) {

    if (event.target === productModal) {

        productModal.style.display = "none";

    }

})

const cartBtn = document.getElementById("cartBtn");

const cartSidebar = document.getElementById("cartSidebar");

const closeCart = document.getElementById("closeCart");


cartBtn.addEventListener("click", function() {

    cartSidebar.style.right = "0";

});


closeCart.addEventListener("click", function() {

    cartSidebar.style.right = "-400px";

});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});
