/* ==========================================================
   BREAD LOVE — SHARED CART
   ==========================================================
   Load this on EVERY page that needs the cart
   (index.html, menu.html, and any future page).

   It does four things:
   1. Holds your menu data + prices
   2. Saves the cart to the browser so it survives page changes
   3. Builds the slide-up cart panel automatically
   4. Wires up any cart icon you mark with data-cart-toggle
   ========================================================== */


/* ----------------------------------------------------------
   1. YOUR MENU DATA
   ----------------------------------------------------------
   This is the ONE place prices live now. Edit here only.
   Format:  { name: "Item Name", price: 15000 }
---------------------------------------------------------- */
const MENU = [
  {
    id: "bread",
    name: "Bread",
    note: "Loaves, buns & filled breads",
    items: [
      { name: "Butter Sugar", price: 9000 },
      { name: "Mocha Bun", price: 9000 },
      { name: "Yoyo Strawberry", price: 9000 },
      { name: "Pandan Srikaya", price: 10000 },
      { name: "Srondeng", price: 10000 },
      { name: "Pandan Choco", price: 10000 },
      { name: "Wheat Coconut", price: 10000 },
      { name: "Cheese Ring", price: 10000 },
      { name: "Coconut", price: 10000 },
      { name: "Wheat Srikaya", price: 10000 },
      { name: "Red Bean Kacang", price: 10000 },
      { name: "Srikaya", price: 10000 },
      { name: "Almond Raisin", price: 11000 },
      { name: "Garlic Cheese", price: 11000 },
      { name: "Cheese Milk Long", price: 11000 },
      { name: "Chocolate Mesis", price: 11000 },
      { name: "Cheese Bun", price: 11000 },
      { name: "Pineapple Bun", price: 11000 },
      { name: "Double Cheese", price: 11000 },
      { name: "Wheat Red Bean", price: 11000 },
      { name: "Mocca Choco", price: 11000 },
      { name: "Miccho (Mickey Coklat)", price: 11000 },
      { name: "Dark Choco", price: 11000 },
      { name: "Black n White", price: 11000 },
      { name: "Cheese Deluxe", price: 11000 },
      { name: "Cheese Vla", price: 11000 },
      { name: "Wheat Lotus", price: 12000 },
      { name: "Kura Coke", price: 12000 },
      { name: "Wheat Coklat", price: 12000 },
      { name: "Almond Blanc", price: 13000 },
      { name: "Parmesan", price: 13000 },
      { name: "Peanut Choco", price: 13000 },
      { name: "Wheat Pineapple", price: 13000 },
      { name: "Oreo Cream Cheese", price: 13000 },
      { name: "Chocolate Mexico", price: 13000 },
      { name: "Polo Milk", price: 13000 },
      { name: "Pikachu", price: 13000 },
      { name: "Hero", price: 13000 },
      { name: "Spicy Floss", price: 14000 },
      { name: "Banana Boat", price: 14000 },
      { name: "Bonchiz (Floss Cheese)", price: 14000 },
      { name: "Banana Choco", price: 14000 },
      { name: "Banana Split", price: 14000 },
      { name: "Wheat Taro", price: 14000 },
      { name: "Banana Cheese", price: 14000 },
      { name: "Blueberry Cream Cheese", price: 15000 },
      { name: "Sosis Boat", price: 15000 },
      { name: "Taro Bread", price: 15000 },
      { name: "Chicken Sosis", price: 15000 },
      { name: "Meat Lovers (Cheesybeef)", price: 15000 },
      { name: "Ham Bun (isi 5 pcs)", price: 15000 },
      { name: "Dog Bun (isi 5 pcs)", price: 15000 },
      { name: "Love Cheese", price: 16000 },
      { name: "Love Choco Rice", price: 16000 },
      { name: "Floss Roll", price: 16000 },
      { name: "Raisin Whole Wheat", price: 19000 },
      { name: "Bantal", price: 21000 },
      { name: "Sisir", price: 21000 },
      { name: "Plain Loaf", price: 22000 },
      { name: "Whole Wheat", price: 26000 },
      { name: "Kasur Coklat", price: 26000 },
      { name: "Kasur Coklat Keju", price: 28000 },
      { name: "Toast Raisin Cheese", price: 29000 },
      { name: "Pillow Fruity Combo", price: 34000 }
    ]
  },

  {
    id: "cake",
    name: "Cake",
    note: "Swiss rolls, minirolls & slices",
    items: [
      { name: "Miniroll Blueberry", price: 15000 },
      { name: "Miniroll Strawberry", price: 15000 },
      { name: "Miniroll Pandan", price: 15000 },
      { name: "Marmer", price: 16000 },
      { name: "Layer Cake Choco", price: 18000 },
      { name: "Swiss Pandan", price: 68000 },
      { name: "Swiss Cheese", price: 68000 },
      { name: "Swiss Choco", price: 68000 },
      { name: "Swiss Combo", price: 68000 }
    ]
  },

  {
    id: "pastry",
    name: "Pastry",
    note: "Croissants, danish & wassant",
    items: [
      { name: "Tiger Wassant", price: 12000 },
      { name: "Nutty Wassant", price: 12000 },
      { name: "Croissant Plain", price: 14000 },
      { name: "Croissant Chocolate", price: 16000 },
      { name: "Croissant Cheese", price: 16000 },
      { name: "Croissant Oreo Cream Cheese", price: 18000 },
      { name: "Danish Almond", price: 19000 }
    ]
  },

  {
    id: "cookies",
    name: "Cookies",
    note: "Coming soon",
    items: [
      // No cookies yet — add them like this when you have them:
      // { name: "Butter Cookies", price: 25000 },
    ]
  }
];

/* Your WhatsApp number, international format.
   0819 0808 9999  ->  6281908089999  */
const WHATSAPP_NUMBER = "6281908089999";

/* The name the browser files your cart under */
const STORAGE_KEY = "breadlove-cart";


/* ----------------------------------------------------------
   2. SMALL HELPERS
---------------------------------------------------------- */

/* "Swiss Choco" -> "swiss-choco" */
function makeId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* 15000 -> "Rp 15.000" */
function formatPrice(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

/* One flat lookup so we can find any item by its id */
const ITEM_BY_ID = {};
MENU.forEach(function (section) {
  section.items.forEach(function (item) {
    item.id = makeId(item.name);
    ITEM_BY_ID[item.id] = item;
  });
});


/* ----------------------------------------------------------
   3. THE CART + SAVING IT
   ----------------------------------------------------------
   localStorage is a tiny notepad the browser keeps for your
   site. It survives page changes AND closing the tab.
   It only stores text, so we convert to/from JSON.
---------------------------------------------------------- */

let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const clean = {};

    /* Only keep items that still exist on the menu.
       Protects you if you rename or delete something later. */
    Object.keys(saved).forEach(function (id) {
      if (ITEM_BY_ID[id] && saved[id] > 0) clean[id] = saved[id];
    });
    return clean;
  } catch (error) {
    return {};   // corrupted or storage blocked — start fresh
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    /* Private browsing can block storage. The cart still works
       on this page, it just won't carry to the next one. */
  }
}

function addItem(id) {
  if (!ITEM_BY_ID[id]) return;
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart[id] = (cart[id] || 0) - 1;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function clearCart() {
  cart = {};
  saveCart();
  renderCart();
}

function totalItems() {
  return Object.values(cart).reduce(function (sum, qty) { return sum + qty; }, 0);
}

function totalPrice() {
  return Object.keys(cart).reduce(function (sum, id) {
    return sum + ITEM_BY_ID[id].price * cart[id];
  }, 0);
}


/* ----------------------------------------------------------
   4. BUILD THE PANEL
   ----------------------------------------------------------
   We create this with JavaScript instead of pasting it into
   every HTML file. Write it once, it shows up everywhere.
---------------------------------------------------------- */

const overlay = document.createElement("div");
overlay.className = "cart-overlay";

const panel = document.createElement("aside");
panel.className = "cart-panel";
panel.setAttribute("aria-label", "Shopping cart");
panel.innerHTML = `
  <header class="panel-head">
    <h2>Your order</h2>
    <div class="panel-actions">
      <button class="text-btn" data-cart-clear>Clear all</button>
      <button class="text-btn" data-cart-close aria-label="Close cart">Close</button>
    </div>
  </header>

  <div class="cart-lines" data-cart-lines></div>

  <footer class="panel-foot">
    <div class="panel-total">
      <span>Total</span>
      <strong data-cart-total>Rp 0</strong>
    </div>
    <button class="checkout" data-cart-checkout>Check out</button>
  </footer>`;

document.body.append(overlay, panel);

const cartLines = panel.querySelector("[data-cart-lines]");


/* ----------------------------------------------------------
   5. DRAW EVERYTHING
---------------------------------------------------------- */

function renderCart() {
  const count = totalItems();
  const total = totalPrice();

  /* a) every cart badge on the page (top-right icon, bottom bar) */
  document.querySelectorAll("[data-cart-count]").forEach(function (badge) {
    badge.textContent = count;
    badge.classList.toggle("empty-badge", count === 0);
  });

  /* b) every place showing the running total */
  document.querySelectorAll("[data-cart-total]").forEach(function (element) {
    element.textContent = formatPrice(total);
  });

  /* c) checkout buttons switch off when there's nothing to order */
  document.querySelectorAll("[data-cart-checkout]").forEach(function (button) {
    button.disabled = count === 0;
  });

  /* d) every + / − stepper on the page */
  document.querySelectorAll(".stepper").forEach(function (stepper) {
    const qty = cart[stepper.dataset.id] || 0;
    stepper.querySelector(".qty").textContent = qty;
    stepper.classList.toggle("active", qty > 0);
  });

  /* e) the list inside the panel */
  const ids = Object.keys(cart);
  cartLines.innerHTML = ids.length
    ? ids.map(function (id) {
        const item = ITEM_BY_ID[id];
        return `
          <div class="cart-line">
            <div class="cart-line-text">
              <h4>${item.name}</h4>
              <p>${formatPrice(item.price)} each</p>
            </div>
            <div class="stepper active" data-id="${id}">
              <button class="step minus" data-action="remove" aria-label="Remove one ${item.name}">−</button>
              <span class="qty">${cart[id]}</span>
              <button class="step plus" data-action="add" aria-label="Add one ${item.name}">+</button>
            </div>
            <p class="line-total">${formatPrice(item.price * cart[id])}</p>
          </div>`;
      }).join("")
    : `<p class="empty">Your cart is empty. Head to the menu and tap + on anything to start.</p>`;
}


/* ----------------------------------------------------------
   6. OPEN / CLOSE
---------------------------------------------------------- */

function openCart() {
  panel.classList.add("open");
  overlay.classList.add("show");
}

function closeCart() {
  panel.classList.remove("open");
  overlay.classList.remove("show");
}

overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeCart();
});


/* ----------------------------------------------------------
   7. CHECKOUT
   ----------------------------------------------------------
   No payment yet. Builds the order as a message and opens
   WhatsApp with it already typed out.
---------------------------------------------------------- */

function checkout() {
  if (totalItems() === 0) return;

  let message = "Halo Bread Love! Saya mau pesan:\n\n";
  Object.keys(cart).forEach(function (id) {
    const item = ITEM_BY_ID[id];
    message += `• ${item.name} x${cart[id]} — ${formatPrice(item.price * cart[id])}\n`;
  });
  message += `\nTotal: ${formatPrice(totalPrice())}`;

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}


/* ----------------------------------------------------------
   8. ONE LISTENER FOR THE WHOLE PAGE
   ----------------------------------------------------------
   Instead of attaching a listener to all 160 + and − buttons,
   we put ONE on the document and ask "what got clicked?"
   This is called event delegation. It also means buttons
   created later (like the cart lines) work automatically.
---------------------------------------------------------- */

document.addEventListener("click", function (event) {
  /* + / − buttons */
  const step = event.target.closest(".step");
  if (step) {
    const id = step.closest(".stepper").dataset.id;
    if (step.dataset.action === "add") addItem(id);
    else removeItem(id);
    return;
  }

  /* anything marked as a cart opener */
  const toggle = event.target.closest("[data-cart-toggle]");
  if (toggle) {
    event.preventDefault();     // stops <a href="#"> from jumping
    openCart();
    return;
  }

  if (event.target.closest("[data-cart-close]"))    { closeCart(); return; }
  if (event.target.closest("[data-cart-clear]"))    { clearCart(); return; }
  if (event.target.closest("[data-cart-checkout]")) { checkout();  return; }
});


/* ----------------------------------------------------------
   9. KEEP TABS IN SYNC
   ----------------------------------------------------------
   If the site is open in two tabs, this updates the other one.
---------------------------------------------------------- */

window.addEventListener("storage", function (event) {
  if (event.key === STORAGE_KEY) {
    cart = loadCart();
    renderCart();
  }
});


/* ----------------------------------------------------------
   10. START + SHARE WITH menu.js
---------------------------------------------------------- */

renderCart();

window.BreadLove = { MENU, ITEM_BY_ID, formatPrice, renderCart, openCart, closeCart };
