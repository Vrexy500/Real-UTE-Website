// Sample Data replicating exact visual products
const productsData = [
  {
    id: 1,
    title: "Oraimo 30000mah Massive Ultra Two-way Fast Powerbank",
    price: 38500,
    tag: "Power Banks",
    image: "oraimo.png"
  },
  {
    id: 2,
    title: "Apple iPhone 18 Pro Max 6.9\" OLED 48MP 256/512/1TB/2TB AppleA20Pro Phone By FedEx",
    price: 1850000,
    tag: "Phone Stand",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Apple AirPods 4 Wireless Earbuds Bluetooth USB-C Charging Case White",
    price: 240000,
    tag: "Chargers",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "EA SPORTS FC 27 - Standard Edition",
    price: 85000,
    tag: "Mouse",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "Apple AirPods 4 Wireless Earbuds Bluetooth White",
    price: 220000,
    tag: "Chargers",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "Original USB-C Fast Charger For iPhone 14 13",
    price: 18000,
    tag: "Chargers",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    title: "Apple iPhone 17 Pro Max 2TB Factory Unlocked Warranty All Colors Warranty NEW",
    price: 1650000,
    tag: "Phone Stand",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    title: "Samsung Galaxy A17 5G A1760 6.7\"S-AMOLED 128 256GB Octa-Core 5000mAh By FedEx",
    price: 320000,
    tag: "Phone Stand",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    title: "Samsung Galaxy Z Fold 8 1TB 16GB New Sealed",
    price: 1950000,
    tag: "Phone Stand",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    title: "Sony Computer Entertainment PlayStation 5",
    price: 680000,
    tag: "Laptop",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    title: "5X Starlink V2 Satellite Dish Kit with Router - UTA-212 & UTR-211 Description",
    price: 850000,
    tag: "Flash Drive",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    title: "Jbl Flip 6 Portable Bluetooth Speaker",
    price: 125000,
    tag: "Power Banks",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 13,
    title: "JbL XTREME 4 PORTABLE WIRELESS BLUETOOTH SPEAKER",
    price: 280000,
    tag: "Power Banks",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    title: "Starlink Standard Kit - Gen 3 (02534003-501/B)- White",
    price: 920000,
    tag: "Flash Drive",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    title: "Apple iPhone Duo 256GB Star White Brand New 5",
    price: 1450000,
    tag: "Phone Stand",
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=400&q=80"
  }
];

const tagsList = [
  "Flash Drive", "Chargers", "Cables", "Memory Card",
  "Mouse", "Keyboard", "Laptop Bag", "Laptop", "Phone Stand", "Power Banks"
];

let cart = [];
let activeTag = null;

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  renderTags();
  renderProducts(productsData);

  // Cart Drawer Listeners
  document.getElementById('openCartBtn').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  // Newsletter Submit Listener
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Unstoppable Tech deals!');
    e.target.reset();
  });
});

// Render Sub-category Tags
function renderTags() {
  const container = document.getElementById("subTagsContainer");
  container.innerHTML = "";

  tagsList.forEach((tag, index) => {
    const btn = document.createElement("button");
    btn.className = `tag-btn ${activeTag === tag ? 'active' : ''}`;
    btn.textContent = tag;
    btn.onclick = () => filterByTag(tag);

    container.appendChild(btn);

    if (index < tagsList.length - 1) {
      const divider = document.createElement("span");
      divider.className = "tag-divider";
      divider.textContent = "/";
      container.appendChild(divider);
    }
  });
}

// Filter products by tag
function filterByTag(tag) {
  if (activeTag === tag) {
    activeTag = null;
    renderProducts(productsData);
  } else {
    activeTag = tag;
    const filtered = productsData.filter(p => p.tag === tag);
    renderProducts(filtered);
  }
  renderTags();
}

// Format numbers into Naira currency format
function formatNaira(num) {
  return "₦" + num.toLocaleString("en-NG");
}

// Render Product Grid
function renderProducts(items) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #9ca3af; padding: 40px;">No products found in this category.</div>`;
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.title}" class="product-img">
      </div>
      <h3 class="product-title">${product.title}</h3>
      <div class="product-bottom">
        <span class="price-tag">${formatNaira(product.price)}</span>
             class="add-btn"       (${product.id})      
      </div>
    `;
    grid.appendChild(card);
  });
}

// Add Item to Cart
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  openCart();
}

// Remove Item from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

// Update Cart Badge and Drawer Items
function updateCartUI() {
  const badge = document.getElementById("cartBadgeCount");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalCount;

  const cartContainer = document.getElementById("cartItemsContainer");
  const totalPriceElem = document.getElementById("cartTotalPrice");

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p style="text-align: center; color: #6b7280; margin-top: 40px;">Your cart is empty.</p>`;
    totalPriceElem.textContent = "₦0";
    return;
  }

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const itemElem = document.createElement("div");
    itemElem.className = "cart-item";
    itemElem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">${formatNaira(item.price)} x ${item.qty}</div>
      </div>
           class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
    `;
    cartContainer.appendChild(itemElem);
  });

  totalPriceElem.textContent = formatNaira(total);
}

// Open & Close Cart Side Drawer
function openCart() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
}
<script>
  // Self-contained tab switching function for Laptops.html
  function switchTab(sectionId, clickedElement) {
    // 1. Hide all laptop sections
    const sections = document.querySelectorAll('.laptop-section');
    sections.forEach(sec => {
      sec.style.display = 'none';
    });

    // 2. Show the targeted section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    // 3. Remove 'active' class from all subtype links
    const links = document.querySelectorAll('.subtype-link');
    links.forEach(link => {
      link.classList.remove('active');
    });

    // 4. Add 'active' class to the clicked tab
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Find all product cards or container elements that hold the item info
    // Adjust selector based on your HTML structure (e.g., .product-card, .card, etc.)
    const productCards = document.querySelectorAll(".product-card, .card");

    productCards.forEach(card => {
      // Look for the product name and the old "Add to cart" button
      const titleElement = card.querySelector("h3, h4, .product-title, .title");
      const addToCartBtn = card.querySelector(".add-to-cart, button");

      if (titleElement && addToCartBtn) {
        const productName = titleElement.textContent.trim();

        // Create the new Enquire anchor link
        const enquireLink = document.createElement("a");
        enquireLink.href = `contact.html?product=${encodeURIComponent(productName)}`;
        enquireLink.className = "enquire-btn";
        enquireLink.innerHTML = `<i class="fab fa-whatsapp"></i> Enquire`;

        // Replace the old button with the new Enquire button
        addToCartBtn.replaceWith(enquireLink);
      }
    });
  });
  
</script>