
(() => {
  const CONFIG = {
    OWNER_NAME: "Samir Azam",
    CONTACT_EMAIL: "azamsamir190@gmail.com",
    RESUME_LINK: "Samir_Azam_SDE_Intern.pdf",
    PROJECTS: [
      {
        id: "syncspace",
        title: "Syncspace",
        description:
          "Real-time language exchange platform with video chat. Built real-time video calling and chat using Stream API & WebRTC; includes auth, friends, notifications, theming.",
        tech: ["React", "Node.js", "MongoDB", "Stream API", "Zustand"],
        live: "https://syncspace-vywz.onrender.com/",
        repo: "https://github.com/Samir-Azam/syncspace",
      },
      {
        id: "ai-resume",
        title: "AI Resume Analyzer",
        description:
          "AI-powered resume analysis and ATS optimization tool using Puter.js; analyzes resume content and returns optimization suggestions.",
        tech: ["React", "TypeScript", "Tailwind"],
        live: "https://ai-resume-analyzer-delta-ten.vercel.app/",
        repo: "https://github.com/Samir-Azam/ai-resume-analyzer",
      },
    ],
    PRODUCTS: [
      {
        id: "prd1",
        name: "Laptop Pro",
        price: 75000,
        rating: 4.6,
        category: "electronics",
        desc: "Powerful laptop.",
      },
      {
        id: "prd2",
        name: "Casual Shirt",
        price: 1200,
        rating: 4.2,
        category: "clothes",
        desc: "Comfort fabric.",
      },
      {
        id: "prd3",
        name: "Running Shoes",
        price: 3200,
        rating: 4.7,
        category: "shoes",
        desc: "Lightweight sneakers.",
      },
      {
        id: "prd4",
        name: "Headphones",
        price: 2200,
        rating: 4.3,
        category: "electronics",
        desc: "Noise-cancelling.",
      },
      {
        id: "prd5",
        name: "Jacket",
        price: 3500,
        rating: 4.2,
        category: "clothes",
        desc: "Winter jacket.",
      },
    ],
  };

  /* small helpers */
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const uid = () => Math.random().toString(36).slice(2, 9);
  const fmtDate = (d) => (d ? new Date(d).toLocaleDateString() : "");

  /* init header/resume */
  $("#ownerBio").textContent =
    "Full-stack developer skilled in MERN, real-time systems, and AI-driven applications—focused on building clean, scalable, user-centric products.";
  $("#resumeLink").href = CONFIG.RESUME_LINK;

  /* THEME toggle with persistence */
  const THEME_KEY = "apx_theme_final_v1";
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = $("#themeToggle");
    if (theme === "light") {
      btn.textContent = "Dark";
      btn.setAttribute("aria-pressed", "false");
    } else {
      btn.textContent = "Light";
      btn.setAttribute("aria-pressed", "true");
    }
    localStorage.setItem(THEME_KEY, theme);
  }
  $("#themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  });
  (function () {
    applyTheme(localStorage.getItem(THEME_KEY) || "dark");
  })();

  /* PORTFOLIO */
  const portfolioGrid = $("#portfolioGrid");
  function renderPortfolio() {
    portfolioGrid.innerHTML = "";
    CONFIG.PROJECTS.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <div class="meta">${p.tech.join(" • ")}</div>
        <p>${p.description}</p>
        <div class="row" style="margin-top:8px">
          <button class="btn view-project" data-id="${p.id}">View</button>
          ${
            p.live
              ? `<a class="btn secondary" href="${p.live}" target="_blank">Live</a>`
              : ""
          }
          ${
            p.repo
              ? `<a class="btn ghost" href="${p.repo}" target="_blank">Repo</a>`
              : ""
          }
        </div>
      `;
      portfolioGrid.appendChild(card);
    });
  }
  renderPortfolio();

  /* modal */
  const modal = $("#modal"),
    modalContent = $("#modalContent"),
    modalClose = $("#modalClose");
  function openModal() {
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    modalContent.innerHTML = "";
  }
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("click", (e) => {
    const v = e.target.closest(".view-project");
    if (v) {
      const id = v.dataset.id;
      const p = CONFIG.PROJECTS.find((x) => x.id === id);
      if (!p) return;
      modalContent.innerHTML = `<h3>${
        p.title
      }</h3><div class="meta">${p.tech.join(" • ")}</div><p>${p.description}</p>
        <div class="row" style="margin-top:8px">${
          p.live
            ? `<a class="btn" href="${p.live}" target="_blank">Live Demo</a>`
            : ""
        } ${
        p.repo
          ? `<a class="btn secondary" href="${p.repo}" target="_blank">Repository</a>`
          : ""
      }</div>`;
      openModal();
    }
  });

  /* TODO app */
  const TASK_KEY = "apx_tasks_final_v1";
  let tasks = JSON.parse(localStorage.getItem(TASK_KEY) || "[]");
  const taskText = $("#taskText"),
    taskDue = $("#taskDue"),
    taskPriority = $("#taskPriority"),
    taskTags = $("#taskTags");
  const taskList = $("#taskList"),
    taskSearch = $("#taskSearch"),
    taskFilter = $("#taskFilter"),
    taskSort = $("#taskSort"),
    todoSummary = $("#todoSummary");

  function saveTasks() {
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
    renderTasks();
  }
  function addTask() {
    const t = taskText.value.trim();
    if (!t) return;
    const obj = {
      id: uid(),
      title: t,
      due: taskDue.value || null,
      priority: taskPriority.value,
      tags: (taskTags.value || "")
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
      created: Date.now(),
      done: false,
    };
    tasks.unshift(obj);
    taskText.value = "";
    taskDue.value = "";
    taskTags.value = "";
    saveTasks();
  }
  function toggleTask(id) {
    tasks = tasks.map((x) => (x.id === id ? { ...x, done: !x.done } : x));
    saveTasks();
  }
  function removeTask(id) {
    tasks = tasks.filter((x) => x.id !== id);
    saveTasks();
  }
  function editTask(id) {
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    const title = prompt("Edit task title", t.title);
    if (title !== null) {
      tasks = tasks.map((x) => (x.id === id ? { ...x, title } : x));
      saveTasks();
    }
  }
  function clearCompleted() {
    tasks = tasks.filter((x) => !x.done);
    saveTasks();
  }
  function clearAll() {
    if (confirm("Clear all tasks?")) {
      tasks = [];
      saveTasks();
    }
  }
  function exportTasks() {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  function importTasks(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const arr = JSON.parse(e.target.result);
        if (Array.isArray(arr)) {
          tasks = arr.concat(tasks);
          saveTasks();
        } else alert("Invalid format - expected array");
      } catch (err) {
        alert("Invalid JSON");
      }
    };
    reader.readAsText(file);
  }

  function taskMatches(t, q) {
    if (!q) return true;
    const s = q.toLowerCase();
    return (
      t.title.toLowerCase().includes(s) ||
      (t.tags || []).some((tag) => tag.toLowerCase().includes(s))
    );
  }
  function renderTasks() {
    const q = (taskSearch.value || "").trim();
    let list = tasks.slice();
    const f = taskFilter.value;
    if (f === "pending") list = list.filter((t) => !t.done);
    if (f === "completed") list = list.filter((t) => t.done);
    if (f === "overdue")
      list = list.filter(
        (t) => t.due && new Date(t.due) < new Date() && !t.done
      );
    if (taskSort.value === "due_asc")
      list.sort((a, b) => ((a.due || "9999") > (b.due || "9999") ? 1 : -1));
    if (taskSort.value === "priority_desc")
      list.sort(
        (a, b) =>
          ({ low: 0, medium: 1, high: 2 }[b.priority] -
          { low: 0, medium: 1, high: 2 }[a.priority])
      );
    if (taskSort.value === "created_desc")
      list.sort((a, b) => b.created - a.created);
    list = list.filter((t) => taskMatches(t, q));
    taskList.innerHTML = "";
    list.forEach((t) => {
      const li = document.createElement("li");
      li.className = "item";
      li.innerHTML = `<div><div style="font-weight:700">${
        t.title
      }</div><div class="meta">${(t.tags || []).join(", ")} ${
        t.due ? " • due " + fmtDate(t.due) : ""
      } • ${t.priority}</div></div>
        <div class="row"><button class="btn small toggle" data-id="${t.id}">${
        t.done ? "Undo" : "Done"
      }</button><button class="btn small edit" data-id="${
        t.id
      }">Edit</button><button class="btn ghost small remove" data-id="${
        t.id
      }">Remove</button></div>`;
      if (t.done) li.style.opacity = "0.65";
      if (t.due && new Date(t.due) < new Date() && !t.done)
        li.style.border = "1px solid #ff7b7b";
      taskList.appendChild(li);
    });
    const total = tasks.length,
      completed = tasks.filter((t) => t.done).length;
    todoSummary.innerHTML = `<div>Total: ${total}</div><div>Completed: ${completed}</div><div>Pending: ${
      total - completed
    }</div>`;
  }

  $("#addTaskBtn").addEventListener("click", addTask);
  $("#exportTasks").addEventListener("click", exportTasks);
  $("#importTasks").addEventListener("click", () =>
    $("#importTasksFile").click()
  );
  $("#importTasksFile").addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (f) importTasks(f);
  });
  $("#bulkComplete").addEventListener("click", () => {
    tasks = tasks.map((t) => ({ ...t, done: true }));
    saveTasks();
  });
  $("#clearCompleted").addEventListener("click", clearCompleted);
  $("#clearAll").addEventListener("click", clearAll);
  taskList.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (e.target.matches(".toggle")) toggleTask(id);
    if (e.target.matches(".remove")) removeTask(id);
    if (e.target.matches(".edit")) editTask(id);
  });
  taskSearch.addEventListener("input", debounce(renderTasks, 250));
  taskFilter.addEventListener("change", renderTasks);
  taskSort.addEventListener("change", renderTasks);

  renderTasks();

  /* PRODUCTS */
  let products = CONFIG.PRODUCTS.slice();
  const categoryFilter = $("#categoryFilter"),
    productGrid = $("#productGrid"),
    productSearch = $("#productSearch"),
    priceRange = $("#priceRange"),
    productSort = $("#productSort"),
    productPager = $("#productPager");

  (function populateCategories() {
    const cats = ["all", ...new Set(products.map((p) => p.category))];
    categoryFilter.innerHTML = "";
    cats.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent =
        c === "all" ? "All categories" : c[0].toUpperCase() + c.slice(1);
      categoryFilter.appendChild(opt);
    });
  })();

  let page = 1,
    pageSize = 6;
  function renderProducts() {
    let list = products.slice();
    const q = (productSearch.value || "").trim().toLowerCase();
    if (q)
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.desc || "").toLowerCase().includes(q)
      );
    const cat = categoryFilter.value;
    if (cat && cat !== "all") list = list.filter((p) => p.category === cat);
    const maxP = Number(priceRange.value) || Infinity;
    list = list.filter((p) => p.price <= maxP);
    if (productSort.value === "price_asc")
      list.sort((a, b) => a.price - b.price);
    if (productSort.value === "price_desc")
      list.sort((a, b) => b.price - a.price);
    if (productSort.value === "rating_desc")
      list.sort((a, b) => b.rating - a.rating);
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    page = Math.min(page, pages);
    const start = (page - 1) * pageSize,
      end = start + pageSize;
    const slice = list.slice(start, end);
    productGrid.innerHTML = "";
    slice.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `<h4>${p.name}</h4><div class="meta">₹${p.price} • ${
        p.rating
      }★</div><p>${
        p.desc || ""
      }</p><div class="row" style="margin-top:8px"><button class="btn small view-product" data-id="${
        p.id
      }">Details</button><button class="btn secondary add-cart" data-id="${
        p.id
      }">Add</button></div>`;
      productGrid.appendChild(card);
    });
    productPager.innerHTML = "";
    for (let i = 1; i <= pages; i++) {
      const b = document.createElement("button");
      b.className = "btn ghost";
      b.textContent = i;
      if (i === page) b.classList.add("badge");
      b.addEventListener("click", () => {
        page = i;
        renderProducts();
      });
      productPager.appendChild(b);
    }
  }

  productSearch.addEventListener(
    "input",
    debounce(() => {
      page = 1;
      renderProducts();
    }, 200)
  );
  categoryFilter.addEventListener("change", () => {
    page = 1;
    renderProducts();
  });
  priceRange.addEventListener("input", () => {
    page = 1;
    renderProducts();
  });
  productSort.addEventListener("change", () => {
    page = 1;
    renderProducts();
  });
  $("#resetFilters").addEventListener("click", () => {
    categoryFilter.value = "all";
    priceRange.value = Math.max(...products.map((p) => p.price));
    productSearch.value = "";
    productSort.value = "default";
    page = 1;
    renderProducts();
  });

  productGrid.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (!id) return;
    const p = products.find((x) => x.id === id);
    if (e.target.matches(".view-product")) {
      modalContent.innerHTML = `<h3>${p.name}</h3><p class="meta">Category: ${
        p.category
      } • Rating: ${p.rating}</p><p>${p.desc || ""}</p><p>Price: ₹${
        p.price
      }</p>`;
      openModal();
    }
    if (e.target.matches(".add-cart")) {
      alert(`${p.name} added to cart (demo)`);
    }
  });

  priceRange.max = Math.max(...products.map((p) => p.price), 10000);
  priceRange.value = priceRange.max;
  renderProducts();

  /* NOTES */
  const NOTES_KEY = "apx_notes_final_v1";
  let notes = JSON.parse(localStorage.getItem(NOTES_KEY) || "[]");
  function saveNotes() {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    renderNotes();
  }
  function addNote() {
    const t = $("#noteText").value.trim();
    if (!t) return;
    notes.unshift({ id: uid(), text: t, created: Date.now() });
    $("#noteText").value = "";
    saveNotes();
  }
  function renderNotes() {
    $("#notesList").innerHTML = "";
    notes.forEach((n) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `<div>${n.text}</div><div class="meta">${new Date(
        n.created
      ).toLocaleString()}</div>`;
      $("#notesList").appendChild(div);
    });
  }
  $("#saveNote").addEventListener("click", addNote);
  $("#clearNotes").addEventListener("click", () => {
    if (confirm("Clear all notes?")) {
      notes = [];
      saveNotes();
    }
  });
  renderNotes();

  /* utilities */
  function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }
})();
