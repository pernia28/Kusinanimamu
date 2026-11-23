const AED_TO_PHP_RATE = 17.40;

function formatPHP(aedAmount) {
    const phpValue = aedAmount * AED_TO_PHP_RATE;
    return "₱" + phpValue.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const menuDishes = [
    {
        id: 1,
        name: "Special Beef Kare-Kare",
        category: "classics",
        badge: "⭐ Mamu's Best",
        price: 48.00,
        desc: "Slow-cooked tender beef chuck & tripe in rich savory peanut sauce with fresh eggplant, string beans & homemade bagoong.",
        image: "images/kare-kare.jpg"
    },
    {
        id: 2,
        name: "Garlic Pork Adobo",
        category: "classics",
        badge: "🔥 Bestseller",
        price: 38.00,
        desc: "Classic pork belly simmered in cane vinegar, soy sauce, garlic cloves & black peppercorns.",
        image: "images/adobo.jpg"
    },
    {
        id: 3,
        name: "Crispy Lechon Kawali",
        category: "classics",
        badge: "Crispy!",
        price: 45.00,
        desc: "Golden crispy deep-fried pork belly served with liver gravy or spicy vinegar dip.",
        image: "images/lechon-kawali.jpg"
    },
    {
        id: 4,
        name: "Sinigang na Hipon sa Sampalok",
        category: "classics",
        badge: "Soup",
        price: 42.00,
        desc: "Fresh prawns cooked in tangy sour tamarind broth with kangkong, radish, and green chili.",
        image: "images/sinigang-hipon.jpg"
    },
    {
        id: 5,
        name: "Chicken Inasal with Java Rice",
        category: "classics",
        badge: "🍗 Grilled",
        price: 36.00,
        desc: "Bacolod-style chargrilled chicken quarter marinated in lemongrass, calamansi & annatto oil, served with garlic rice & atchara.",
        image: "images/chicken-inasal.jpg"
    },
    {
        id: 6,
        name: "Sizzling Pork Sisig",
        category: "classics",
        badge: "🌶️ Spicy Option",
        price: 40.00,
        desc: "Chopped crispy pork mask and belly tossed with onions, calamansi, chili peppers, and savory seasoning.",
        image: "images/sisig.jpg"
    },
    {
        id: 7,
        name: "Beef Caldereta",
        category: "classics",
        badge: "Hearty",
        price: 46.00,
        desc: "Tender beef cubes braised in rich tomato sauce, liver spread, potatoes, carrots, bell peppers, and melted cheese.",
        image: "images/caldereta.jpg"
    },
    {
        id: 8,
        name: "Pancit Palabok Party Bilao",
        category: "trays",
        badge: "🍽️ Party Size",
        price: 135.00,
        desc: "Large Bilao loaded with rice noodles, savory shrimp sauce, tinapa flakes, chicharon & boiled eggs.",
        image: "images/palabok-bilao.jpg"
    },
    {
        id: 9,
        name: "Lumpiang Shanghai Bilao (50pcs)",
        category: "trays",
        badge: "🍽️ Crowd Favorite",
        price: 95.00,
        desc: "50 pieces of golden crispy pork spring rolls served with sweet & sour sauce.",
        image: "images/lumpiang-shanghai.jpg"
    },
    {
        id: 10,
        name: "Pancit Bihon & Canton Overload Bilao",
        category: "trays",
        badge: "🎉 Handaan",
        price: 120.00,
        desc: "Stir-fried mixed noodles topped with sliced chicken, shrimp, kikiam, fishballs, and crisp vegetables (Good for 10-12 pax).",
        image: "images/pancit-bilao.jpg"
    },
    {
        id: 11,
        name: "Pinoy Fiesta BBQ Bilao (25 Sticks)",
        category: "trays",
        badge: "🍢 Grill Box",
        price: 145.00,
        desc: "25 sticks of sweet-savory marinated pork barbecue grilled over charcoal, served with spiced vinegar and pickled papaya.",
        image: "images/bbq-bilao.jpg"
    },
    {
        id: 12,
        name: "Streetfood Skewers & Kwek-Kwek",
        category: "snacks",
        badge: "🍢 Merienda",
        price: 35.00,
        desc: "Assorted deep-fried batter quail eggs and pork BBQ skewers with spicy vinegar.",
        image: "images/kwek-kwek.jpg"
    },
    {
        id: 13,
        name: "Special Pinoy Spaghetti",
        category: "snacks",
        badge: "🍝 Sweet Style",
        price: 28.00,
        desc: "Filipino-style sweet tomato meat sauce loaded with sliced hotdogs, ground beef, and grated cheddar cheese.",
        image: "images/pinoy-spaghetti.jpg"
    },
    {
        id: 14,
        name: "Turon con Langka (6pcs)",
        category: "snacks",
        badge: "🍌 Crunchy",
        price: 22.00,
        desc: "Crispy caramelized saba banana rolls stuffed with sweet ripe jackfruit strips and coated in brown sugar glaze.",
        image: "images/turon.jpg"
    },
    {
        id: 15,
        name: "Overload Ube Halo-Halo",
        category: "desserts",
        badge: "🍨 Cold Treat",
        price: 25.00,
        desc: "Shaved ice loaded with ube halaya, leche flan, sago, gulaman, sweet beans & ube ice cream.",
        image: "images/halo-halo.jpg"
    },
    {
        id: 16,
        name: "Creamy Leche Flan Tub",
        category: "desserts",
        badge: "🍮 Sweet",
        price: 28.00,
        desc: "Rich, smooth caramelized egg custard baked traditional style.",
        image: "images/leche-flan.jpg"
    },
    {
        id: 17,
        name: "Buko Pandan Salad Tub",
        category: "desserts",
        badge: "🥥 Chilled",
        price: 26.00,
        desc: "Young coconut strips and fragrant pandan jelly cubes mixed in sweetened cream and condensed milk.",
        image: "images/buko-pandan.jpg"
    },
    {
        id: 18,
        name: "Classic Sago't Gulaman (1L Pitcher)",
        category: "drinks",
        badge: "🥤 Refreshing",
        price: 18.00,
        desc: "Ice-cold brown sugar arnibal drink loaded with chewy tapioca pearls and black grass jelly cubes.",
        image: "images/sagot-gulaman.jpg"
    },
    {
        id: 19,
        name: "Fresh Calamansi Honey Juice (500ml)",
        category: "drinks",
        badge: "🍋 Citrus Cooler",
        price: 14.00,
        desc: "Freshly squeezed Philippine lime juice lightly sweetened with pure honey—served ice cold.",
        image: "images/calamansi-juice.jpg"
    }
];

let cart = JSON.parse(localStorage.getItem('mamuCart')) || [];
let selectedDish = null;
let selectedPortion = 'Regular';
let additionalCost = 0;

let currentUser = JSON.parse(localStorage.getItem('mamuCurrentUser')) || null;
let pendingCheckoutAfterAuth = false;

function toggleAccountDropdown(event) {
    event.stopPropagation();
    const menu = document.getElementById('accountDropdown');
    if (menu) menu.classList.toggle('hidden');
}

document.addEventListener('click', function () {
    const menu = document.getElementById('accountDropdown');
    if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});

function updateAuthUI() {
    const authHeader = document.getElementById('authHeaderArea');
    const greeting = document.getElementById('cartUserGreeting');
    const addressInput = document.getElementById('custAddress');
    const heroSignupBtn = document.getElementById('heroSignupBtn');

    if (currentUser) {
        const cleanName = (currentUser.name || 'Kabayan').trim();
        const firstName = cleanName.split(/\s+/)[0];

        if (authHeader) {
            authHeader.innerHTML = `
                <div class="account-menu-wrap">
                    <button type="button" onclick="toggleAccountDropdown(event)" class="account-trigger mamu-card-shadow">
                        <i class="fa-solid fa-circle-user"></i>
                        <span>Hi, ${firstName}!</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div id="accountDropdown" class="account-dropdown mamu-card-shadow hidden" onclick="event.stopPropagation()">
                        <div class="account-dropdown-header">
                            <span class="account-dropdown-name">${cleanName}</span>
                            <span class="account-dropdown-email">${currentUser.email || ''}</span>
                            ${currentUser.phone ? `<span class="account-dropdown-email">${currentUser.phone}</span>` : ''}
                        </div>
                        <button type="button" onclick="logoutUser()" class="account-dropdown-item">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            `;
        }
        if (greeting) greeting.innerText = `Ordering as: ${cleanName}`;
        if (addressInput && !addressInput.value) addressInput.value = currentUser.address || '';
        if (heroSignupBtn) heroSignupBtn.classList.add('hidden');
    } else {
        if (authHeader) authHeader.innerHTML = '';
        if (greeting) greeting.innerText = "Kusina ni Mamu UAE";
        if (heroSignupBtn) heroSignupBtn.classList.remove('hidden');
    }
}

function openAuthModal(tab = 'login', noticeMessage = '') {
    switchAuthTab(tab);
    const noticeEl = document.getElementById('authNotice');
    if (noticeMessage && noticeEl) {
        document.getElementById('authNoticeText').innerText = noticeMessage;
        noticeEl.classList.remove('hidden');
    } else if (noticeEl) {
        noticeEl.classList.add('hidden');
    }
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('hidden');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
    pendingCheckoutAfterAuth = false;
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabSignupBtn = document.getElementById('tabSignupBtn');
    const title = document.getElementById('authModalTitle');

    if (!loginForm || !signupForm) return;

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        if (title) title.innerText = "Kabayan Log In";
        if (tabLoginBtn) tabLoginBtn.className = "auth-tab active-tab";
        if (tabSignupBtn) tabSignupBtn.className = "auth-tab";
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        if (title) title.innerText = "Create Kabayan Account";
        if (tabSignupBtn) tabSignupBtn.className = "auth-tab active-tab";
        if (tabLoginBtn) tabLoginBtn.className = "auth-tab";
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const phone = document.getElementById('signupPhone').value.trim();
    const address = document.getElementById('signupAddress').value.trim();
    const password = document.getElementById('signupPassword').value;

    let users = JSON.parse(localStorage.getItem('mamuUsers')) || [];
    if (users.some(u => u.email === email)) {
        alert("That email is already registered! Please log in instead.");
        switchAuthTab('login');
        document.getElementById('loginEmail').value = email;
        return;
    }

    users.push({ name, email, phone, address, password });
    localStorage.setItem('mamuUsers', JSON.stringify(users));

    currentUser = { name, email, phone, address };
    localStorage.setItem('mamuCurrentUser', JSON.stringify(currentUser));
    updateAuthUI();

    const shouldProceed = pendingCheckoutAfterAuth;
    closeAuthModal();
    if (shouldProceed) submitDirectOrder();
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('mamuUsers')) || [];
    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (!matchedUser) {
        alert("Invalid email or password! Click 'Sign Up' if you don't have an account yet.");
        return;
    }

    currentUser = {
        name: matchedUser.name,
        email: matchedUser.email,
        phone: matchedUser.phone || '',
        address: matchedUser.address
    };
    localStorage.setItem('mamuCurrentUser', JSON.stringify(currentUser));
    updateAuthUI();

    const shouldProceed = pendingCheckoutAfterAuth;
    closeAuthModal();
    if (shouldProceed) submitDirectOrder();
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('mamuCurrentUser');
    updateAuthUI();
}

function renderDishes(category = 'all', searchQuery = '') {
    const grid = document.getElementById('dishesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = menuDishes;
    if (category !== 'all') {
        filtered = filtered.filter(d => d.category === category);
    }
    if (searchQuery.trim() !== '') {
        filtered = filtered.filter(d =>
            d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-menu">No dishes found in this category.</div>`;
        return;
    }

    filtered.forEach(dish => {
        const card = document.createElement('div');
        card.className = "dish-card mamu-card-shadow";
        card.innerHTML = `
            <div>
                <div class="dish-img-wrap">
                    <img src="${dish.image}" alt="${dish.name}" class="dish-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; flex-direction:column; padding:12px; text-align:center; background:#FFEC99; font-weight:900;">
                        <span>KUSINA NI MAMU</span>
                        <small style="margin-top:4px; font-weight:700;">${dish.name}</small>
                    </div>
                    <span class="dish-badge">${dish.badge}</span>
                </div>
                <div class="dish-body">
                    <div class="dish-top-row">
                        <h3 class="dish-name font-display">${dish.name}</h3>
                        <div class="text-right">
                            <span class="dish-price-aed font-display">AED ${dish.price.toFixed(2)}</span>
                            <span class="dish-price-php">≈ ${formatPHP(dish.price)}</span>
                        </div>
                    </div>
                    <p class="dish-desc">${dish.desc}</p>
                </div>
            </div>
            <div class="dish-footer">
                <button type="button" onclick="openModal(${dish.id})" class="btn-add-dish mamu-card-shadow">
                    <i class="fa-solid fa-plus"></i> Add to Tray
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat, btnElement) {
    document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.className = "cat-pill";
    });
    if (btnElement) {
        btnElement.className = "cat-pill active-cat mamu-card-shadow";
    }
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    renderDishes(cat);
}

function handleSearch() {
    const query = document.getElementById('searchInput').value;
    renderDishes('all', query);
}

function openModal(dishId) {
    selectedDish = menuDishes.find(d => d.id === dishId);
    if (!selectedDish) return;

    selectedPortion = 'Regular';
    additionalCost = 0;

    const portionButtons = document.querySelectorAll('.portion-btn');
    if (portionButtons.length >= 2) {
        portionButtons[0].className = 'portion-btn active-portion';
        portionButtons[1].className = 'portion-btn';
    }

    document.getElementById('modalDishTitle').innerText = selectedDish.name;
    document.getElementById('modalDishSubtitle').innerText = selectedDish.desc;
    document.getElementById('modalPrice').innerText = `AED ${selectedDish.price.toFixed(2)}`;
    document.getElementById('modalPricePhp').innerText = `≈ ${formatPHP(selectedDish.price)} PHP`;
    document.getElementById('modalNotes').value = '';
    document.getElementById('customizeModal').classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('customizeModal');
    if (modal) modal.classList.add('hidden');
    selectedDish = null;
}

function setPortion(portionName, extra, btnElement) {
    selectedPortion = portionName;
    additionalCost = extra;

    document.querySelectorAll('.portion-btn').forEach(b => {
        b.className = 'portion-btn';
    });
    btnElement.className = 'portion-btn active-portion';

    const totalPrice = selectedDish.price + additionalCost;
    document.getElementById('modalPrice').innerText = `AED ${totalPrice.toFixed(2)}`;
    document.getElementById('modalPricePhp').innerText = `≈ ${formatPHP(totalPrice)} PHP`;
}

function confirmAddToCart() {
    if (!selectedDish) return;

    const notes = document.getElementById('modalNotes').value.trim();
    const itemPrice = selectedDish.price + additionalCost;

    const cartItem = {
        id: selectedDish.id,
        name: `${selectedDish.name} (${selectedPortion})`,
        price: itemPrice,
        notes: notes,
        quantity: 1
    };

    const existing = cart.find(c => c.name === cartItem.name && c.notes === cartItem.notes);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(cartItem);
    }

    updateCartUI();
    closeModal();
    toggleCart();
}

function updatePaymentInfo() {
    const select = document.getElementById('custPaymentMethod');
    const note = document.getElementById('paymentMethodNote');
    if (!select || !note) return;

    if (select.value === 'Card on Delivery') {
        note.innerText = "Pay by card upon delivery (rider will bring a POS terminal when requested).";
    } else if (select.value === 'Bank Transfer / UAE Transfer') {
        note.innerText = "Send transfer using your Order ID as reference once your order is placed.";
    } else {
        note.innerText = "Pay with AED cash directly to the rider upon delivery.";
    }
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const container = document.getElementById('cartItemsContainer');
    const footer = document.getElementById('cartFooter');
    const totalPriceEl = document.getElementById('cartTotalPrice');
    const totalPricePhpEl = document.getElementById('cartTotalPricePhp');

    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    const totalSum = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

    if (badge) badge.innerText = totalItems;
    if (totalPriceEl) totalPriceEl.innerText = `AED ${totalSum.toFixed(2)}`;
    if (totalPricePhpEl) totalPricePhpEl.innerText = `≈ ${formatPHP(totalSum)} PHP`;

    localStorage.setItem('mamuCart', JSON.stringify(cart));

    if (!container || !footer) return;

    if (cart.length === 0) {
        footer.classList.add('hidden');
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-basket-shopping cart-empty-icon"></i>
                <p class="cart-item-name">Your Tray is Empty</p>
                <p class="cart-item-unit">Add delicious Pinoy dishes from our menu!</p>
            </div>
        `;
        return;
    }

    footer.classList.remove('hidden');
    container.innerHTML = '';

    cart.forEach((item, idx) => {
        const subTotal = item.price * item.quantity;
        const div = document.createElement('div');
        div.className = "cart-item-card mamu-card-shadow";
        div.innerHTML = `
            <div>
                <h4 class="cart-item-name font-display">${item.name}</h4>
                <p class="cart-item-unit">AED ${item.price.toFixed(2)} <span class="dish-price-php">(${formatPHP(item.price)})</span></p>
                ${item.notes ? `<p class="cart-item-note">Note: ${item.notes}</p>` : ''}
                <div class="cart-qty-row">
                    <button type="button" onclick="changeQty(${idx}, -1)" class="qty-btn">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button type="button" onclick="changeQty(${idx}, 1)" class="qty-btn">+</button>
                </div>
            </div>
            <div class="text-right">
                <span class="cart-item-sub-aed">AED ${subTotal.toFixed(2)}</span>
                <span class="cart-item-sub-php">≈ ${formatPHP(subTotal)}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function changeQty(idx, delta) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
    }
    updateCartUI();
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('hidden');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('hidden');
}

function placeOrder() {
    if (cart.length === 0) return;
    if (!currentUser) {
        pendingCheckoutAfterAuth = true;
        openAuthModal('login', 'Almost done! Please log in or sign up to complete your order.');
        return;
    }
    submitDirectOrder();
}

function submitDirectOrder() {
    if (cart.length === 0 || !currentUser) return;

    const addressInput = document.getElementById('custAddress');
    const paymentInput = document.getElementById('custPaymentMethod');
    const address = (addressInput && addressInput.value.trim()) || currentUser.address || 'For confirmation';
    const paymentMethod = (paymentInput && paymentInput.value) || 'Cash on Delivery (AED)';
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderNumber = "MAMU-" + Math.floor(100000 + Math.random() * 900000);

    const itemsHtml = cart.map(item => {
        const noteText = item.notes ? ` <em>(${item.notes})</em>` : '';
        return `<div>• ${item.quantity}x ${item.name}${noteText}</div>`;
    }).join('');

    const detailsEl = document.getElementById('orderSuccessDetails');
    if (detailsEl) {
        detailsEl.innerHTML = `
            <p class="order-confirm-line"><strong>Order ID:</strong> ${orderNumber}</p>
            <p class="order-confirm-line"><strong>Customer:</strong> ${currentUser.name}</p>
            ${currentUser.phone ? `<p class="order-confirm-line"><strong>Phone:</strong> ${currentUser.phone}</p>` : ''}
            <p class="order-confirm-line"><strong>Delivery Address:</strong> ${address}</p>
            <p class="order-confirm-line"><strong>Payment Method:</strong> ${paymentMethod}</p>
            <p class="order-confirm-line"><strong>Total:</strong> AED ${total.toFixed(2)} (≈ ${formatPHP(total)})</p>
            <div class="order-confirm-items">
                <strong>Items:</strong>
                ${itemsHtml}
            </div>
        `;
    }

    cart = [];
    updateCartUI();

    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.add('hidden');

    const successModal = document.getElementById('orderSuccessModal');
    if (successModal) successModal.classList.remove('hidden');
}

function closeOrderSuccessModal() {
    const modal = document.getElementById('orderSuccessModal');
    if (modal) modal.classList.add('hidden');
}

window.onload = function () {
    updateAuthUI();
    updatePaymentInfo();
    updateCartUI();

    const grid = document.getElementById('dishesGrid');
    if (grid) {
        const page = document.body.getAttribute('data-page');
        if (page === 'party-trays') {
            renderDishes('trays');
        } else {
            renderDishes('all');
        }
    }
};