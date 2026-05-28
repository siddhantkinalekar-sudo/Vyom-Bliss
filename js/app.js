/* ==========================================================================
   VYOM BLISS - E-COMMERCE CORE LOGIC
   ========================================================================== */

// OWNER CONFIGURATION
const OWNER_PHONE = "919004001000"; // Replace with owner's actual 12-digit WhatsApp number (with country code, no '+')

// FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 19 FALLBACK PRODUCTS ARRAY (FULL MENU CODES)
const FALLBACK_PRODUCTS = [
  // SIGNATURE CHOCOLATES
  {
    id:'VB-PRD-001', name:'Classic Milk Bites',
    category:'signature', price:20,
    description:'Smooth creamy milk chocolate bites perfect for daily indulgence',
    ingredients:'Milk chocolate, sugar, cocoa butter, vanilla',
    weight:'per piece', emoji:'🍬', badge:'', inStock:true, displayOrder:1
  },
  {
    id:'VB-PRD-002', name:'Dark Chocolate Squares',
    category:'signature', price:30,
    description:'Rich intense dark chocolate squares with deep cocoa flavour',
    ingredients:'Dark chocolate 70%, sugar, cocoa butter',
    weight:'per piece', emoji:'🟫', badge:'', inStock:true, displayOrder:2
  },
  {
    id:'VB-PRD-003', name:'Caramel Filled Delights',
    category:'signature', price:40,
    description:'Milk chocolate shells with a flowing house-made caramel centre',
    ingredients:'Milk chocolate, caramel, cream, butter, sugar',
    weight:'per piece', emoji:'🍮', badge:'bestseller', inStock:true, displayOrder:3
  },
  {
    id:'VB-PRD-004', name:'Hazelnut Crunch',
    category:'signature', price:50,
    description:'Milk chocolate with crunchy roasted hazelnut pieces throughout',
    ingredients:'Milk chocolate, roasted hazelnuts, sugar, cocoa butter',
    weight:'per piece', emoji:'🌰', badge:'bestseller', inStock:true, displayOrder:4
  },

  // FLAVOURED COLLECTION
  {
    id:'VB-PRD-005', name:'Strawberry Cream',
    category:'flavoured', price:30,
    description:'White chocolate with a tangy freeze-dried strawberry cream filling',
    ingredients:'White chocolate, strawberry cream, freeze-dried strawberry',
    weight:'per piece', emoji:'🍓', badge:'', inStock:true, displayOrder:5
  },
  {
    id:'VB-PRD-006', name:'Orange Zest',
    category:'flavoured', price:35,
    description:'Dark chocolate infused with fresh orange zest and candied peel',
    ingredients:'Dark chocolate 65%, candied orange peel, orange zest',
    weight:'per piece', emoji:'🍊', badge:'', inStock:true, displayOrder:6
  },
  {
    id:'VB-PRD-007', name:'Coffee Infusion',
    category:'flavoured', price:40,
    description:'Dark chocolate ganache with single-origin espresso infusion',
    ingredients:'Dark chocolate 68%, espresso, cream, butter',
    weight:'per piece', emoji:'☕', badge:'bestseller', inStock:true, displayOrder:7
  },
  {
    id:'VB-PRD-008', name:'Mint Magic',
    category:'flavoured', price:35,
    description:'Dark chocolate with a refreshing cool peppermint cream centre',
    ingredients:'Dark chocolate 65%, peppermint cream, sugar',
    weight:'per piece', emoji:'🌿', badge:'new', inStock:true, displayOrder:8
  },

  // PREMIUM TRUFFLES
  {
    id:'VB-PRD-009', name:'Cocoa Classic',
    category:'truffle', price:60,
    description:'Classic dark chocolate truffle rolled in premium cocoa powder',
    ingredients:'Dark chocolate 72%, cream, cocoa powder, butter',
    weight:'per piece', emoji:'🍫', badge:'', inStock:true, displayOrder:9
  },
  {
    id:'VB-PRD-010', name:'Belgian Ganache',
    category:'truffle', price:80,
    description:'Silky Belgian couverture truffle with a melt-in-mouth ganache centre',
    ingredients:'Belgian dark chocolate, cream, butter, vanilla',
    weight:'per piece', emoji:'🇧🇪', badge:'bestseller', inStock:true, displayOrder:10
  },
  {
    id:'VB-PRD-011', name:'Almond Crunch',
    category:'truffle', price:70,
    description:'Dark chocolate truffle with crunchy toasted almond praline inside',
    ingredients:'Dark chocolate 70%, toasted almonds, praline, cream',
    weight:'per piece', emoji:'🌰', badge:'', inStock:true, displayOrder:11
  },
  {
    id:'VB-PRD-012', name:'Royal Gold Truffle',
    category:'truffle', price:100,
    description:'Our most premium truffle — 80% dark chocolate with edible gold dust',
    ingredients:'Dark chocolate 80%, cream, butter, edible gold dust',
    weight:'per piece', emoji:'👑', badge:'bestseller', inStock:true, displayOrder:12
  },

  // GIFT BOXES
  {
    id:'VB-PRD-013', name:'Mini Box',
    category:'gift', price:150,
    description:'Delightful mini gift box with 6 hand-picked assorted chocolates',
    ingredients:'Assorted chocolates — signature and flavoured varieties',
    weight:'6 pieces', emoji:'🎁', badge:'', inStock:true, displayOrder:13
  },
  {
    id:'VB-PRD-014', name:'Sweet Box',
    category:'gift', price:280,
    description:'Perfect gifting box with 12 assorted chocolates in a premium box',
    ingredients:'Assorted chocolates — all varieties included',
    weight:'12 pieces', emoji:'🍬', badge:'bestseller', inStock:true, displayOrder:14
  },
  {
    id:'VB-PRD-015', name:'Celebration Box',
    category:'gift', price:520,
    description:'Grand celebration box with 24 premium chocolates for special occasions',
    ingredients:'Assorted premium chocolates — full collection',
    weight:'24 pieces', emoji:'🎊', badge:'bestseller', inStock:true, displayOrder:15
  },
  {
    id:'VB-PRD-016', name:'Luxury Box',
    category:'gift', price:999,
    description:'Our finest luxury gift box with exclusive hand-crafted chocolates',
    ingredients:'Exclusive assorted premium chocolates with gold truffles',
    weight:'assorted', emoji:'👑', badge:'new', inStock:true, displayOrder:16
  },

  // SPECIAL ADD-ONS
  {
    id:'VB-PRD-017', name:'Customised Chocolates',
    category:'addon', price:100,
    description:'Personalised chocolates with custom messages, shapes and flavours',
    ingredients:'As per customisation — all natural ingredients',
    weight:'price onwards', emoji:'✏️', badge:'', inStock:true, displayOrder:17
  },
  {
    id:'VB-PRD-018', name:'Chocolate Bouquets',
    category:'addon', price:299,
    description:'Beautiful bouquet of chocolate roses and assorted pieces for gifting',
    ingredients:'Assorted chocolates arranged in bouquet style',
    weight:'price onwards', emoji:'💐', badge:'bestseller', inStock:true, displayOrder:18
  },
  {
    id:'VB-PRD-019', name:'Festive Packs',
    category:'addon', price:199,
    description:'Seasonal festive packs for Diwali, Christmas, Eid and all occasions',
    ingredients:'Assorted festive chocolates with seasonal flavours',
    weight:'price onwards', emoji:'✨', badge:'new', inStock:true, displayOrder:19
  }
];

// LOCAL COUPONS FALLBACK
const LOCAL_COUPONS = {
  'FIRST10':  { discountPercent: 10, description: '10% off your first order' },
  'DIWALI20': { discountPercent: 20, description: '20% Diwali special' },
  'BULK15':   { discountPercent: 15, description: '15% bulk order discount' }
};

// CATEGORY TAB MAPPING
const CATEGORY_MAP = {
  'all':        null,
  'signature':  'signature',
  'flavoured':  'flavoured',
  'truffle':    'truffle',
  'gift':       'gift',
  'addon':      'addon'
};

// GLOBAL STATES
let db = null;
let products = [];
let cart = [];
let appliedCoupon = null;
let activeCategory = 'all';
let searchQuery = '';

// MODAL STATE variables
let selectedProductForModal = null;
let modalQty = 1;

// INITIALIZE APP
window.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  fetchProducts();
  loadCartFromLocalStorage();
  updateCartUI();
});

// FIREBASE INITIALIZATION
function initFirebase() {
  if (firebaseConfig.apiKey === 'YOUR_API_KEY') {
    console.info('Firebase not configured — using fallback data');
    return;
  }
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  } catch(e) {
    console.warn('Firebase init failed:', e);
  }
}

// FETCH PRODUCTS
async function fetchProducts() {
  if (!db) {
    products = [...FALLBACK_PRODUCTS];
    renderProducts();
    return;
  }
  try {
    const snap = await db.collection('products')
      .orderBy('displayOrder', 'asc')
      .get();
    if (snap.empty) {
      products = [...FALLBACK_PRODUCTS];
    } else {
      products = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
    renderProducts();
  } catch(e) {
    console.warn('Firebase fetch failed:', e);
    products = [...FALLBACK_PRODUCTS];
    renderProducts();
  }
}

// RENDER PRODUCTS GRID
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  const filtered = products.filter(p => {
    const matchesCategory = !CATEGORY_MAP[activeCategory] || p.category === CATEGORY_MAP[activeCategory];
    const matchesSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.ingredients.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 3rem 0; color: var(--text-body);">No products found matching your criteria.</div>`;
    return;
  }

  filtered.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('onclick', `handleCardClick(event, '${p.id}')`);
    
    // Add staggered fade up on load
    card.style.animationDelay = `${idx * 60}ms`;
    card.classList.add('animate-fade-up');

    // Category background
    let bgClass = `bg-${p.category}`;
    
    // Badge markup
    let badgeMarkup = '';
    if (!p.inStock) {
      badgeMarkup = `<span class="card-badge badge-outofstock">Out of Stock</span>`;
    } else if (p.badge) {
      badgeMarkup = `<span class="card-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>`;
    }

    // Add to cart button status
    const isBtnDisabled = !p.inStock ? 'disabled' : '';
    const btnText = p.inStock ? 'Add to Cart' : 'Out of Stock';

    card.innerHTML = `
      <div class="card-img-area ${bgClass}">
        ${badgeMarkup}
        <span>${p.emoji}</span>
      </div>
      <div class="card-content">
        <span class="card-category">${p.category}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          <div class="card-price-row">
            <span class="card-price">₹${p.price}</span>
            <span class="card-weight">${p.weight}</span>
          </div>
          <button class="btn-add-cart" ${isBtnDisabled} onclick="handleAddToCartClick(event, '${p.id}')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            <span>${btnText}</span>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// FILTER BY CATEGORY TABS
function filterCategory(catName, tabEl) {
  activeCategory = catName;
  
  // Highlight active tab
  if (tabEl) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');
  } else {
    // If called from footer links, sync tab UI
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => {
      t.classList.remove('active');
      const onclickAttr = t.getAttribute('onclick');
      if (onclickAttr && onclickAttr.includes(`'${catName}'`)) {
        t.classList.add('active');
      }
    });
  }

  renderProducts();
}

// SEARCH FILTER PRODUCTS
function searchProducts() {
  const val = document.getElementById('searchProductsInput').value;
  searchQuery = val.toLowerCase().trim();
  renderProducts();
}

// HANDLE PRODUCT CARD CLICK
function handleCardClick(event, productId) {
  // Prevent click opening modal if Add To Cart button is clicked
  if (event.target.closest('.btn-add-cart')) return;
  openProductModal(productId);
}

// HANDLE CARD DIRECT ADD TO CART
function handleAddToCartClick(event, productId) {
  event.stopPropagation(); // Stop opening modal
  const item = products.find(p => p.id === productId);
  if (item && item.inStock) {
    addItemToCart(item, 1);
    showToast(`Added ${item.name} to order! 🍫`);
    trackAnalyticsEvent('add_to_cart', item.id, item.name, item.category, item.price);
  }
}

// CART STATE OPERATIONS
function loadCartFromLocalStorage() {
  const stored = localStorage.getItem('vb_cart');
  if (stored) {
    try {
      cart = JSON.parse(stored);
    } catch(e) {
      cart = [];
    }
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('vb_cart', JSON.stringify(cart));
}

function addItemToCart(product, qty) {
  const existing = cart.find(c => c.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: qty,
      emoji: product.emoji,
      category: product.category
    });
  }
  saveCartToLocalStorage();
  updateCartUI();
}

function adjustCartQty(productId, amount) {
  const item = cart.find(c => c.id === productId);
  if (item) {
    item.qty += amount;
    if (item.qty <= 0) {
      removeItemFromCart(productId);
      return;
    }
    saveCartToLocalStorage();
    updateCartUI();
  }
}

function removeItemFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCartToLocalStorage();
  updateCartUI();
  showToast('Removed item from order.');
}

// SYNC CART DRAWER & PRICING
function updateCartUI() {
  const container = document.getElementById('cartItemsContainer');
  const footerArea = document.getElementById('cartFooterArea');
  const badge = document.getElementById('cartBadgeCount');

  // Count items
  const totalItemsCount = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = totalItemsCount;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <span class="empty-cart-emoji">🍫</span>
        <span class="empty-cart-msg">Your cart is empty</span>
        <span class="empty-cart-sub">Browse our collections and add fresh luxury treats to begin.</span>
      </div>
    `;
    footerArea.style.display = 'none';
    return;
  }

  // Render items
  container.innerHTML = '';
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-details">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">₹${item.price} x ${item.qty}</span>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control-row">
          <button class="qty-ctrl-btn" onclick="adjustCartQty('${item.id}', -1)">&minus;</button>
          <span class="qty-number-txt">${item.qty}</span>
          <button class="qty-ctrl-btn" onclick="adjustCartQty('${item.id}', 1)">&plus;</button>
        </div>
        <button class="cart-item-remove-btn" onclick="removeItemFromCart('${item.id}')">Remove</button>
      </div>
    `;
    container.appendChild(row);
  });

  footerArea.style.display = 'flex';

  // Calculate pricing breakdown
  const subtotal = cart.reduce((s, c) => s + (c.price * c.qty), 0);
  let discountAmt = 0;
  let discountPct = 0;

  if (appliedCoupon) {
    discountPct = appliedCoupon.discountPercent;
    discountAmt = Math.round(subtotal * discountPct / 100);
    document.getElementById('discountValRow').style.display = 'flex';
    document.getElementById('discountVal').textContent = `-₹${discountAmt}`;
  } else {
    document.getElementById('discountValRow').style.display = 'none';
  }

  const grandTotal = subtotal - discountAmt;

  document.getElementById('subtotalVal').textContent = `₹${subtotal}`;
  document.getElementById('grandTotalVal').textContent = `₹${grandTotal}`;
}

// TOGGLE CART SIDEBAR
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

// APPLY COUPONS CHECKER
async function applyCoupon() {
  const couponInput = document.getElementById('couponInput');
  const code = couponInput.value.trim().toUpperCase();
  
  if (!code) {
    showCouponMsg('Enter a coupon code', 'error');
    return;
  }

  if (db) {
    try {
      const doc = await db.collection('coupons').doc(code).get();
      if (doc.exists && doc.data().active) {
        appliedCoupon = { code, ...doc.data() };
        showCouponMsg('✅ ' + doc.data().description, 'success');
        updateCartUI();
        trackAnalyticsEvent('coupon_applied', '', code, '', doc.data().discountPercent);
        return;
      }
    } catch(e) {
      console.warn('Coupon Firebase check failed:', e);
    }
  }

  // Fallback to local coupons
  if (LOCAL_COUPONS[code]) {
    appliedCoupon = { code, ...LOCAL_COUPONS[code] };
    showCouponMsg('✅ ' + appliedCoupon.description, 'success');
    updateCartUI();
    trackAnalyticsEvent('coupon_applied', '', code, '', appliedCoupon.discountPercent);
  } else {
    appliedCoupon = null;
    showCouponMsg('❌ Invalid code. Try FIRST10', 'error');
    updateCartUI();
  }
}

function showCouponMsg(text, type) {
  const msgEl = document.getElementById('couponMsg');
  msgEl.textContent = text;
  msgEl.className = 'coupon-message-txt ' + (type === 'success' ? 'coupon-msg-success' : 'coupon-msg-error');
}

// COPY COUPON ON CLICK
function copyCouponCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Code "${code}" copied to clipboard! 📋`);
    // Pre-fill input inside cart drawer
    document.getElementById('couponInput').value = code;
  }).catch(() => {
    // Fail-safe
    document.getElementById('couponInput').value = code;
    showToast(`Use code "${code}" at checkout! 🍫`);
  });
}

// FIELD ERRORS LOGIC
function showFieldError(inputId, errorMsg) {
  const inputEl = document.getElementById(inputId);
  const container = document.getElementById(inputId + 'Container');
  const errorEl = document.getElementById(inputId + 'Error');
  if (container && errorEl && inputEl) {
    container.classList.add('error-state');
    errorEl.textContent = errorMsg;
  }
}

function clearFieldErrors() {
  const containers = document.querySelectorAll('.input-container');
  containers.forEach(c => c.classList.remove('error-state'));
  const errorMsgs = document.querySelectorAll('.field-error-msg');
  errorMsgs.forEach(m => m.textContent = '');
}

// MOBILE HAMBURGER NAVIGATION
function toggleMobileMenu(forceState) {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  if (forceState !== undefined) {
    if (forceState) {
      navLinks.classList.add('active');
      menuToggle.classList.add('active');
    } else {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  } else {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }
}

// FAQ ACCORDIONS TOGGLE
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answerContainer = item.querySelector('.faq-answer-container');
  const isActive = item.classList.contains('active');
  
  // Close all other FAQ items
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(i => {
    i.classList.remove('active');
    i.querySelector('.faq-answer-container').style.maxHeight = null;
  });
  
  // Toggle current item
  if (!isActive) {
    item.classList.add('active');
    answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
  }
}

// PRODUCT DETAILS MODAL VIEW CONTROLLERS
function openProductModal(productId) {
  const item = products.find(p => p.id === productId);
  if (!item) return;

  selectedProductForModal = item;
  modalQty = 1;

  // Sync elements inside modal overlay
  document.getElementById('modalImgEmoji').textContent = item.emoji;
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalCategory').textContent = item.category;
  document.getElementById('modalPrice').textContent = `₹${item.price}`;
  document.getElementById('modalWeight').textContent = item.weight;
  document.getElementById('modalDesc').textContent = item.description;
  
  // Ingredients list
  const ingredientsSpan = document.querySelector('#modalIngredients span');
  if (ingredientsSpan) {
    ingredientsSpan.textContent = item.ingredients;
  }

  // Handle image area background category styling
  const imgArea = document.getElementById('modalImgArea');
  imgArea.className = 'modal-img-area bg-' + item.category;

  // Modal Badges
  const badgeEl = document.getElementById('modalBadge');
  if (!item.inStock) {
    badgeEl.textContent = 'Out of Stock';
    badgeEl.className = 'modal-badge badge-outofstock';
  } else if (item.badge) {
    badgeEl.textContent = item.badge;
    badgeEl.className = 'modal-badge badge-' + item.badge.toLowerCase();
    badgeEl.style.display = 'block';
  } else {
    badgeEl.style.display = 'none';
  }

  // Update button status
  const addBtn = document.getElementById('btnModalAddCart');
  if (item.inStock) {
    addBtn.disabled = false;
    addBtn.textContent = 'Add to Cart';
  } else {
    addBtn.disabled = true;
    addBtn.textContent = 'Out of Stock';
  }

  document.getElementById('modalQtyVal').textContent = modalQty;

  // Reveal Modal
  document.getElementById('productModalOverlay').classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModalOverlay').classList.remove('active');
  selectedProductForModal = null;
}

function closeProductModalOutside(event) {
  if (event.target.id === 'productModalOverlay') {
    closeProductModal();
  }
}

function adjustModalQty(amount) {
  modalQty += amount;
  if (modalQty < 1) modalQty = 1;
  document.getElementById('modalQtyVal').textContent = modalQty;
}

function addModalItemToCart() {
  if (selectedProductForModal && selectedProductForModal.inStock) {
    addItemToCart(selectedProductForModal, modalQty);
    showToast(`Added ${modalQty}x ${selectedProductForModal.name} to order! 🍫`);
    trackAnalyticsEvent('add_to_cart', selectedProductForModal.id, selectedProductForModal.name, selectedProductForModal.category, selectedProductForModal.price * modalQty);
    closeProductModal();
  }
}

// TOAST NOTIFICATIONS
function showToast(msg) {
  const toast = document.getElementById('toastContainer');
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

// GENERAL WHATSAPP ROUTING
function contactWhatsApp(subject) {
  const text = encodeURIComponent(`Hi Vyom Bliss! I have a question regarding: ${subject}`);
  window.open(`https://wa.me/${OWNER_PHONE}?text=${text}`, '_blank');
}

function openOwnerWhatsApp() {
  window.open(`https://wa.me/${OWNER_PHONE}`, '_blank');
}

// SILENT TRACK ANALYTICS EVENT
function trackAnalyticsEvent(event, productId, productName, category, value) {
  if (!db) return;
  try {
    db.collection('analytics').add({
      event: event,
      productId: productId || "",
      productName: productName || "",
      category: category || "",
      value: value || 0,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch(e) {
    // Fail silently in background
  }
}

// COMPLETE PLACE ORDER FUNCTION
async function placeOrder() {
  clearFieldErrors();

  // Step 1 — Read fields
  const name    = document.getElementById('custName').value.trim();
  const phone   = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const pincode = document.getElementById('custPincode').value.trim();
  const city    = document.getElementById('custCity').value.trim();
  const note    = document.getElementById('custNote').value.trim();

  // Step 2 — Validate
  let valid = true;
  if (!name || name.length < 3) {
    showFieldError('custName', 'Enter your full name (minimum 3 characters)');
    valid = false;
  }
  if (!/^\d{10}$/.test(phone)) {
    showFieldError('custPhone', 'Enter a valid 10 digit phone number');
    valid = false;
  }
  if (!address || address.length < 10) {
    showFieldError('custAddress', 'Enter a complete address (minimum 10 characters)');
    valid = false;
  }
  if (!/^\d{6}$/.test(pincode)) {
    showFieldError('custPincode', 'Enter a valid 6 digit pincode');
    valid = false;
  }
  if (!city) {
    showFieldError('custCity', 'Enter your city');
    valid = false;
  }
  if (cart.length === 0) {
    showToast('Your cart is empty');
    valid = false;
  }
  if (!valid) return;

  // Step 3 — Calculate pricing
  const subtotal    = cart.reduce((s, c) => s + (c.price * c.qty), 0);
  const couponInput = document.getElementById('couponInput');
  const couponCode  = appliedCoupon ? couponInput.value.trim().toUpperCase() : '';
  const discountPct = appliedCoupon ? appliedCoupon.discountPercent : 0;
  const discountAmt = Math.round(subtotal * discountPct / 100);
  const grandTotal  = subtotal - discountAmt;

  // Step 4 — Build items array
  const items = cart.map(c => ({
    name:      c.name,
    emoji:     c.emoji,
    category:  c.category,
    price:     c.price,
    qty:       c.qty,
    lineTotal: c.price * c.qty
  }));

  // Step 5 — Build complete order object
  const orderId = 'VB-' + Date.now();
  const order = {
    orderId,
    status:  'New',
    source:  'website',
    customer: {
      name:  name,
      phone: phone
    },
    delivery: {
      address:      address,
      pincode:      pincode,
      city:         city,
      instructions: note
    },
    items,
    pricing: {
      subtotal,
      couponCode,
      discountPct,
      discountAmt,
      grandTotal
    },
    meta: {
      itemCount:      items.length,
      totalQty:       items.reduce((s, i) => s + i.qty, 0),
      hasSpecialNote: note.length > 0,
      hasCoupon:      couponCode.length > 0
    }
  };

  // Step 6 — Save to Firebase using orderId as document ID
  if (db) {
    try {
      await db.collection('orders').doc(orderId).set({
        ...order,
        placedAt:  firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      // Analytics
      await db.collection('analytics').add({
        event: 'order_placed',
        productId: '',
        productName: '',
        category: '',
        value: grandTotal,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch(e) {
      console.warn('Firebase save failed — still proceeding:', e);
    }
  }

  // Step 7 — Format WhatsApp message
  const itemLines = items
    .map(i => `  ${i.emoji} ${i.name} x${i.qty} — ₹${i.lineTotal}`)
    .join('\n');

  const msgParts = [
    '🍫 *New Order — Vyom Bliss*',
    '',
    `📋 *Order ID:* ${orderId}`,
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    '',
    '📍 *Delivery Address:*',
    address,
    `${city} — ${pincode}`,
    '',
    '🛒 *Items Ordered:*',
    itemLines,
    '',
    `💰 *Subtotal:* ₹${subtotal}`
  ];
  if (discountAmt > 0) {
    msgParts.push(`🏷️ *Discount (${couponCode}):* -₹${discountAmt}`);
  }
  msgParts.push(`✅ *Grand Total:* ₹${grandTotal}`);
  if (note) msgParts.push(`\n📝 *Note:* ${note}`);
  msgParts.push('', '_Sent from Vyom Bliss website_');

  const message = msgParts.join('\n');

  // Step 8 — Open WhatsApp
  window.open(
    `https://wa.me/${OWNER_PHONE}?text=` + encodeURIComponent(message),
    '_blank'
  );

  // Step 9 — Reset everything
  cart          = [];
  appliedCoupon = null;
  localStorage.removeItem('vb_cart');

  document.getElementById('custName').value    = '';
  document.getElementById('custPhone').value   = '';
  document.getElementById('custAddress').value = '';
  document.getElementById('custPincode').value = '';
  document.getElementById('custCity').value    = '';
  document.getElementById('custNote').value    = '';
  document.getElementById('couponInput').value = '';
  document.getElementById('couponMsg').textContent = '';
  
  updateCartUI();
  toggleCart();
  showToast('Order sent! We will confirm shortly. 🍫');
}
