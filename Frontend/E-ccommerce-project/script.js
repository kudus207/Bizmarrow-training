// ==============================
// 🛒 CART FUNCTIONALITY SCRIPT
// ==============================

// Initialize empty cart array to store cart items
let cart = []; // 🧺 Stores all cart items
let totalItems = 0; // Keeps track of total items added to cart (for the badge on the icon)

// Select all necessary DOM elements
const products = document.querySelectorAll(".product"); // All product containers
const cartCount = document.getElementById("cartCount"); // Cart count badge
const cartIcon = document.getElementById("cartIcon"); // Cart icon at the top of the page

// ==============================
// LOOP THROUGH ALL PRODUCTS
// ==============================
products.forEach((product) => {
  let qty = 0; // Individual quantity tracker for each product

  // Select relevant elements inside each product
  const qtyDisplay = product.querySelector("#qty"); // Quantity display number
  const minusBtn = product.querySelector("#minus"); // Decrease quantity button
  const plusBtn = product.querySelector("#plus"); // Increase quantity button
  const addCartBtn = product.querySelector(".add-cart"); // "Add to cart" button
  const thumbs = product.querySelectorAll(".thumbnails img"); // Thumbnail images
  const mainImg = product.querySelector(".main-image #mainImg"); // Main display image

  // ==============================
  // 🔁 CHANGE MAIN IMAGE ON THUMBNAIL CLICK
  // ==============================
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.src; // Change main image to clicked thumbnail
      thumbs.forEach((img) => img.classList.remove("active")); // Remove highlight from other thumbnails
      thumb.classList.add("active"); // Highlight the clicked one
    });
  });

  // ==============================
  // ➕➖ QUANTITY BUTTONS
  // ==============================
  plusBtn.addEventListener("click", () => {
    qty++; // Increment quantity
    qtyDisplay.textContent = qty; // Update display
  });

  minusBtn.addEventListener("click", () => {
    if (qty > 0) qty--; // Prevent negative quantity
    qtyDisplay.textContent = qty; // Update display
  });

  // ==============================
  // 🛍️ ADD TO CART BUTTON
  // ==============================
  addCartBtn.addEventListener("click", () => {
    // Prevent adding with zero quantity
    if (qty === 0) return alert("Please select a quantity first!");

    // Get product details
    const name = product.querySelector("h1").textContent; // Product name
    const price = parseFloat(product.querySelector(".current h2").textContent.replace("$", "")); // Convert price string to number
    const imgSrc = mainImg.src; // Product image source

    // Check if the product already exists in cart
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.qty += qty; // Update quantity if product already in cart
    } else {
      cart.push({ name, price, qty, imgSrc }); // Add new product to cart array
    }

    // Update total cart count
    totalItems += qty;
    cartCount.textContent = totalItems; // Show new count on cart icon

    // Save updated cart data to localStorage (for use in cart page)
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reset quantity display for current product
    qty = 0;
    qtyDisplay.textContent = qty;
  });
});

// ==============================
// 🛒 NAVIGATE TO CART PAGE
// ==============================
cartIcon.addEventListener("click", () => {
  window.location.href = "cart.html"; // Redirects user to cart page
});
