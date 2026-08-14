/* ==========================================================
   BREAD LOVE — MENU PAGE
   ==========================================================
   This file only builds the menu page itself.
   The cart lives in cart.js, which must load FIRST.

   Note: we read everything off "BL" instead of copying the
   names out. Both files share one global scope, so declaring
   MENU here as well would crash the page.
   ========================================================== */

const BL = window.BreadLove;

const tabList     = document.getElementById("tabList");
const sectionList = document.getElementById("sectionList");


/* ----------------------------------------------------------
   1. LEFT CATEGORY RAIL
---------------------------------------------------------- */
function buildTabs() {
  tabList.innerHTML = BL.MENU.map(function (section) {
    return `
      <button class="tab" data-target="section-${section.id}">
        <span class="tab-name">${section.name}</span>
        <span class="tab-count">${section.items.length}</span>
      </button>`;
  }).join("");
}


/* ----------------------------------------------------------
   2. RIGHT ITEM LIST
---------------------------------------------------------- */
function buildSections() {
  sectionList.innerHTML = BL.MENU.map(function (section) {
    const rows = section.items.length
      ? section.items.map(itemRow).join("")
      : `<p class="empty">Nothing here yet. Add cookies in cart.js and they'll show up.</p>`;

    return `
      <section class="menu-section" id="section-${section.id}">
        <header class="section-head">
          <h2>${section.name}</h2>
          <p>${section.note}</p>
        </header>
        <div class="items">${rows}</div>
      </section>`;
  }).join("");
}

function itemRow(item) {
  return `
    <article class="item">
      <div class="item-text">
        <h3>${item.name}</h3>
        <p class="item-price">${BL.formatPrice(item.price)}</p>
      </div>
      <div class="stepper" data-id="${item.id}">
        <button class="step minus" data-action="remove" aria-label="Remove one ${item.name}">−</button>
        <span class="qty">0</span>
        <button class="step plus" data-action="add" aria-label="Add one ${item.name}">+</button>
      </div>
    </article>`;
}


/* ----------------------------------------------------------
   3. TAB CLICK -> SCROLL TO THAT SECTION
---------------------------------------------------------- */
tabList.addEventListener("click", function (event) {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  document.getElementById(tab.dataset.target).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


/* ----------------------------------------------------------
   4. SCROLLING -> HIGHLIGHT THE RIGHT TAB
---------------------------------------------------------- */
function updateActiveTab() {
  const tabs = document.querySelectorAll(".tab");
  let activeIndex = 0;

  BL.MENU.forEach(function (section, index) {
    const top = document.getElementById("section-" + section.id).getBoundingClientRect().top;
    if (top <= 140) activeIndex = index;   // 140px ≈ just under the banner
  });

  tabs.forEach(function (tab, index) {
    tab.classList.toggle("active", index === activeIndex);
  });
}

window.addEventListener("scroll", updateActiveTab);


/* ----------------------------------------------------------
   5. START
---------------------------------------------------------- */
buildTabs();
buildSections();
BL.renderCart();     // fills in quantities already in the cart
updateActiveTab();
