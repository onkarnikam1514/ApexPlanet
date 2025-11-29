
(() => {
  const PRODUCTS = [
    {
      id: "p1",
      name: "Wireless Headphones",
      price: 7999,
      rating: 4.7,
      category: "electronics",
      img: "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Noise-cancelling over-ear headphones.",
    },
    {
      id: "p2",
      name: "Smartwatch X",
      price: 12999,
      rating: 4.6,
      category: "electronics",
      img: "https://images.unsplash.com/photo-1719075596884-2020f827a8dd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Fitness & health tracking.",
    },
    {
      id: "p3",
      name: "Premium Smartphone",
      price: 69999,
      rating: 4.8,
      category: "electronics",
      img: "https://images.pexels.com/photos/6751554/pexels-photo-6751554.jpeg",
      desc: "Flagship camera & performance.",
    },
    {
      id: "p4",
      name: "Running Shoes",
      price: 4999,
      rating: 4.5,
      category: "fashion",
      img: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Breathable & lightweight running shoes.",
    },
    {
      id: "p5",
      name: "Minimal Wallet",
      price: 799,
      rating: 4.3,
      category: "accessories",
      img: "https://images.unsplash.com/photo-1676276549701-668493cff405?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Slim leather wallet.",
    },
    {
      id: "p6",
      name: "Mechanical Keyboard",
      price: 6999,
      rating: 4.6,
      category: "electronics",
      img: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Compact mechanical keyboard.",
    },
    {
      id: "p7",
      name: "Desk Lamp",
      price: 1599,
      rating: 4.4,
      category: "home",
      img: "https://images.unsplash.com/photo-1621177555452-bedbe4c28879?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Warm LED desk lamp.",
    },
    {
      id: "p8",
      name: "Yoga Mat Pro",
      price: 1999,
      rating: 4.6,
      category: "fitness",
      img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Non-slip 6mm mat.",
    },
    {
      id: "p9",
      name: "Laptop Stand",
      price: 1299,
      rating: 4.4,
      category: "home",
      img: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Ergonomic laptop riser.",
    },
    {
      id: "p10",
      name: "Smart Mug",
      price: 1499,
      rating: 4.2,
      category: "home",
      img: "https://media.wired.com/photos/5a2adf29b1aa2c7905f10461/3:2/w_1600,c_limit/ember-TA.jpg",
      desc: "Temperature control mug.",
    },
    {
      id: "p11",
      name: "Wireless Charger",
      price: 2499,
      rating: 4.5,
      category: "electronics",
      img: "https://images.unsplash.com/photo-1543472750-506bacbf5808?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Fast wireless charging pad.",
    },
    {
      id: "p12",
      name: "Sunglasses",
      price: 1299,
      rating: 4.3,
      category: "fashion",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "UV400 protection eyewear.",
    },
    {
      id: "p13",
      name: "Travel Backpack",
      price: 2499,
      rating: 4.4,
      category: "fashion",
      img: "https://images.unsplash.com/photo-1575844264771-892081089af5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "20L water-resistant bag.",
    },
    {
      id: "p14",
      name: "Bluetooth Speaker",
      price: 2999,
      rating: 4.7,
      category: "electronics",
      img: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Portable speaker with deep bass.",
    },
    {
      id: "p15",
      name: "Office Chair",
      price: 8999,
      rating: 4.5,
      category: "home",
      img: "https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Ergonomic office chair.",
    },
  ];

  // ---------- STATE ----------
  let page = 1;
  const pageSize = 6; // exactly 6 per page
  const state = {
    cart: JSON.parse(localStorage.getItem("sm_cart_v1") || "[]"),
    wishlist: JSON.parse(localStorage.getItem("sm_wishlist_v1") || "[]"),
  };

  // ---------- ELEMENTS ----------
  const productsEl = document.getElementById("products");
  const pagerEl = document.getElementById("pager");
  const searchEl = document.getElementById("search");
  const categoryEl = document.getElementById("category");
  const sortEl = document.getElementById("sort");
  const cartCountEl = document.getElementById("cartCount");

  const cartDrawer = document.getElementById("cartDrawer");
  const openCartBtn = document.getElementById("openCart");
  const closeCartBtn = document.getElementById("closeCart");
  const cartItemsEl = document.getElementById("cartItems");
  const totalVal = document.getElementById("totalVal");

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  const themeToggle = document.getElementById("themeToggle");

  // ---------- HELPERS ----------
  const $ = (s, ctx = document) => ctx.querySelector(s);
  function formatPrice(n) {
    return "₹" + n.toLocaleString("en-IN");
  }
  function uid() {
    return Math.random().toString(36).slice(2, 9);
  }
  function saveState() {
    localStorage.setItem("sm_cart_v1", JSON.stringify(state.cart));
    localStorage.setItem("sm_wishlist_v1", JSON.stringify(state.wishlist));
    updateCartUI();
  }

  // ---------- INIT ----------
  function init() {
    populateCategories();
    renderProducts();
    updateCartUI();
    wireEvents();
    lazyLoadImages();
  }

  // ---------- CATEGORIES ----------
  function populateCategories() {
    const cats = ["all", ...new Set(PRODUCTS.map((p) => p.category))];
    categoryEl.innerHTML = cats
      .map(
        (c) =>
          `<option value="${c}">${
            c === "all" ? "All Categories" : c[0].toUpperCase() + c.slice(1)
          }</option>`
      )
      .join("");
  }

  // ---------- FILTER & SORT ----------
  function getFiltered() {
    let list = PRODUCTS.slice();
    const q = (searchEl.value || "").trim().toLowerCase();
    if (q)
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.desc || "").toLowerCase().includes(q)
      );
    const cat = categoryEl.value;
    if (cat && cat !== "all") list = list.filter((p) => p.category === cat);
    switch (sortEl.value) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating_desc":
        list.sort((a, b) => b.rating - a.rating);
        break;
    }
    return list;
  }

  // ---------- RENDER PRODUCTS (pagination 6) ----------
  function renderProducts() {
    const list = getFiltered();
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    page = Math.min(Math.max(1, page), pages);

    const start = (page - 1) * pageSize;
    const slice = list.slice(start, start + pageSize);

    productsEl.innerHTML = "";
    slice.forEach((p) => {
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <img class="thumb" data-src="${p.img}" alt="${
        p.name
      }" loading="lazy" width="800" height="500">
        <h3 class="title">${p.name}</h3>
        <div class="meta">${p.category} • ⭐ ${p.rating}</div>
        <div class="price">${formatPrice(p.price)}</div>
        <div class="row-actions">
          <button class="btn add" data-id="${p.id}">Add</button>
          <button class="btn ghost view" data-id="${p.id}">View</button>
          <button class="btn ghost wish" data-id="${p.id}">${
        state.wishlist.includes(p.id) ? "♥" : "♡"
      }</button>
        </div>
      `;
      productsEl.appendChild(el);
    });

    // pager
    pagerEl.innerHTML = "";
    const prev = document.createElement("button");
    prev.className = "badge";
    prev.textContent = "Prev";
    prev.disabled = page === 1;
    prev.addEventListener("click", () => {
      page = Math.max(1, page - 1);
      renderProducts();
    });
    pagerEl.appendChild(prev);

    for (let i = 1; i <= pages; i++) {
      const b = document.createElement("button");
      b.className = "badge";
      b.textContent = i;
      if (i === page) {
        b.style.background = "var(--accent)";
        b.style.color = "#00121a";
      }
      b.addEventListener("click", () => {
        page = i;
        renderProducts();
      });
      pagerEl.appendChild(b);
    }

    const next = document.createElement("button");
    next.className = "badge";
    next.textContent = "Next";
    next.disabled = page === pages;
    next.addEventListener("click", () => {
      page = Math.min(pages, page + 1);
      renderProducts();
    });
    pagerEl.appendChild(next);

    // wire actions (delegation approach)
    productsEl
      .querySelectorAll(".add")
      .forEach((btn) =>
        btn.addEventListener("click", (e) => addToCart(e.target.dataset.id))
      );
    productsEl
      .querySelectorAll(".view")
      .forEach((btn) =>
        btn.addEventListener("click", (e) => openModal(e.target.dataset.id))
      );
    productsEl
      .querySelectorAll(".wish")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          toggleWishlist(e.target.dataset.id, e.target)
        )
      );
    lazyLoadImages();
  }

  // ---------- CART ----------
  function addToCart(id) {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (!prod) return;
    const existing = state.cart.find((c) => c.id === id);
    if (existing) existing.qty++;
    else
      state.cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        qty: 1,
      });
    saveState();
  }

  function updateCartUI() {
    cartCountEl.textContent = state.cart.reduce((s, c) => s + c.qty, 0);
    cartItemsEl.innerHTML = "";
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.qty;
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `<div style="flex:1"><div style="font-weight:700">${
        item.name
      }</div><div class="meta">Qty: ${item.qty}</div></div>
        <div style="text-align:right">
          <div style="font-weight:800">${formatPrice(
            item.price * item.qty
          )}</div>
          <div style="margin-top:6px"><button class="btn small dec" data-id="${
            item.id
          }">−</button> <button class="btn small inc" data-id="${
        item.id
      }">+</button> <button class="btn ghost small rm" data-id="${
        item.id
      }">Remove</button></div>
        </div>`;
      cartItemsEl.appendChild(row);
    });

    // wire cart item buttons
    cartItemsEl
      .querySelectorAll(".inc")
      .forEach((b) =>
        b.addEventListener("click", (e) => changeQty(e.target.dataset.id, 1))
      );
    cartItemsEl
      .querySelectorAll(".dec")
      .forEach((b) =>
        b.addEventListener("click", (e) => changeQty(e.target.dataset.id, -1))
      );
    cartItemsEl
      .querySelectorAll(".rm")
      .forEach((b) =>
        b.addEventListener("click", (e) => removeFromCart(e.target.dataset.id))
      );

    totalVal.textContent = formatPrice(total);
  }

  function changeQty(id, delta) {
    state.cart = state.cart.map((c) =>
      c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c
    );
    saveState();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    saveState();
  }

  function clearCart() {
    if (confirm("Clear cart?")) {
      state.cart = [];
      saveState();
    }
  }

  // ---------- WISHLIST ----------
  function toggleWishlist(id, btnEl) {
    if (state.wishlist.includes(id))
      state.wishlist = state.wishlist.filter((x) => x !== id);
    else state.wishlist.push(id);
    localStorage.setItem("sm_wishlist_v1", JSON.stringify(state.wishlist));
    if (btnEl) btnEl.textContent = state.wishlist.includes(id) ? "♥" : "♡";
  }

  // ---------- MODAL ----------
  function openModal(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    modalContent.innerHTML = `<h3>${p.name}</h3><img src="${p.img}" alt="${
      p.name
    }" style="width:100%;border-radius:10px;margin:10px 0"><p class="meta">${
      p.desc
    }</p><p style="font-weight:800">${formatPrice(
      p.price
    )}</p><div style="margin-top:8px"><button class="btn add" data-id="${
      p.id
    }">Add to cart</button><button class="btn ghost wish" data-id="${p.id}">${
      state.wishlist.includes(p.id) ? "♥" : "♡"
    }</button></div>`;
    modal.setAttribute("aria-hidden", "false");
    modal.querySelectorAll(".add").forEach((b) =>
      b.addEventListener("click", (e) => {
        addToCart(e.target.dataset.id);
      })
    );
    modal.querySelectorAll(".wish").forEach((b) =>
      b.addEventListener("click", (e) => {
        toggleWishlist(e.target.dataset.id, e.target);
      })
    );
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    modalContent.innerHTML = "";
  }

  // ---------- EVENTS ----------
  function wireEvents() {
    searchEl.addEventListener(
      "input",
      debounce(() => {
        page = 1;
        renderProducts();
      }, 220)
    );
    categoryEl.addEventListener("change", () => {
      page = 1;
      renderProducts();
    });
    sortEl.addEventListener("change", () => {
      page = 1;
      renderProducts();
    });

    openCartBtn.addEventListener("click", () =>
      cartDrawer.setAttribute("aria-hidden", "false")
    );
    closeCartBtn.addEventListener("click", () =>
      cartDrawer.setAttribute("aria-hidden", "true")
    );
    document.getElementById("clearCart").addEventListener("click", clearCart);
    document
      .getElementById("checkout")
      .addEventListener("click", () => alert("Checkout (demo)"));

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
        cartDrawer.setAttribute("aria-hidden", "true");
      }
    });

    themeToggle.addEventListener("click", () => {
      const cur =
        document.documentElement.getAttribute("data-theme") || "light";
      const nxt = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nxt);
      localStorage.setItem("smartmart_theme", nxt);
      themeToggle.setAttribute(
        "aria-pressed",
        nxt === "dark" ? "true" : "false"
      );
      themeToggle.textContent = nxt === "dark" ? "Light" : "Dark";
    });
  }

  // ---------- LAZY LOAD IMAGES ----------
  function lazyLoadImages() {
    const imgs = Array.from(document.querySelectorAll("img[data-src]"));
    if ("loading" in HTMLImageElement.prototype) {
      imgs.forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
      return;
    }
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              obs.unobserve(img);
            }
          });
        },
        { rootMargin: "200px" }
      );
      imgs.forEach((img) => io.observe(img));
    } else {
      imgs.forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
    }
  }

  // ---------- DEBOUNCE ----------
  function debounce(fn, wait = 200) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), wait);
    };
  }

  // ---------- SAVE STATE ----------
  function saveState() {
    localStorage.setItem("sm_cart_v1", JSON.stringify(state.cart));
    localStorage.setItem("sm_wishlist_v1", JSON.stringify(state.wishlist));
    updateCartUI();
  }

  // ---------- UI UPDATES ----------
  function updateCartUI() {
    cartCountEl.textContent = state.cart.reduce((s, c) => s + c.qty, 0); // build cart items
    cartItemsEl.innerHTML = "";
    let total = 0;
    state.cart.forEach((item) => {
      total += item.qty * item.price;
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `<div style="flex:1"><strong>${
        item.name
      }</strong><div class="meta">Qty: ${
        item.qty
      }</div></div><div style="text-align:right"><div style="font-weight:800">${formatPrice(
        item.price * item.qty
      )}</div><div style="margin-top:6px"><button class="btn small dec" data-id="${
        item.id
      }">−</button> <button class="btn small inc" data-id="${
        item.id
      }">+</button> <button class="btn ghost small rm" data-id="${
        item.id
      }">Remove</button></div></div>`;
      cartItemsEl.appendChild(row);
    });
    cartItemsEl
      .querySelectorAll(".inc")
      .forEach((b) =>
        b.addEventListener("click", (e) => changeQty(e.target.dataset.id, 1))
      );
    cartItemsEl
      .querySelectorAll(".dec")
      .forEach((b) =>
        b.addEventListener("click", (e) => changeQty(e.target.dataset.id, -1))
      );
    cartItemsEl
      .querySelectorAll(".rm")
      .forEach((b) =>
        b.addEventListener("click", (e) => removeFromCart(e.target.dataset.id))
      );
    totalVal.textContent = formatPrice(total);
  }

  function changeQty(id, delta) {
    state.cart = state.cart.map((c) =>
      c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c
    );
    saveState();
  }
  function removeFromCart(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    saveState();
  }

  // ---------- START ----------
  // ensure wishlist exists
  if (!Array.isArray(state.wishlist)) state.wishlist = [];
  // kick off
  init();
  function init() {
    populateCategories();
    renderProducts();
    updateCartUI();
    wireEvents();
    lazyLoadImages();
  }
})();
