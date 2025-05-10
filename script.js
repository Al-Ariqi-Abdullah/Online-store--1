function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت الإضافة إلى السلة!");
  }
  
  function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = 0;
  
    if (cart.length === 0) {
      container.innerHTML = "<p>السلة فارغة.</p>";
      return;
    }
  
    let html = "<ul>";
    cart.forEach(item => {
      html += `<li>${item.name} - ${item.price} ريال</li>`;
      total += item.price;
    });
    html += "</ul>";
    container.innerHTML = html;
    document.getElementById("total-price").innerText = `الإجمالي: ${total} ريال`;
  }
  
  // إذا كنا في صفحة السلة
  if (window.location.pathname.includes("cart.html")) {
    window.onload = loadCart;
  }
  