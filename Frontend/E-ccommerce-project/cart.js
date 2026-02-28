// 🧺 Select key DOM elements
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// 🔄 Load saved cart data from localStorage (if any)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🖼️ Function to render all cart items dynamically
function renderCart() {
  // Clear previous cart content
  cartItemsContainer.innerHTML = "";
  let total = 0;

  // Loop through cart items and create their HTML structure
  cart.forEach((item, index) => {
    // Calculate running total
    total += item.price * item.qty;

    // Create a div for each item
    const div = document.createElement("div");
    div.classList.add("cart-item");

    // Insert product details
    div.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)} × ${item.qty}</p>
      </div>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    // Append to the cart container
    cartItemsContainer.appendChild(div);
  });

  // Update the total amount displayed
  cartTotal.textContent = total.toFixed(2);
}

// 🗑️ Handle item removal (using event delegation)
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    // Get item index from the button's data attribute
    const index = e.target.getAttribute("data-index");

    // Remove selected item from cart array
    cart.splice(index, 1);

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render cart with updated data
    renderCart();
  }
});

// 🚀 Initialize cart display when page loads
renderCart();
