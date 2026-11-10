/* ==========================================================================
   Shared site behaviour: header/footer, menu, animations, projects, quote form
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var page = document.body.getAttribute("data-page") || "";

  var NAV = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "services", label: "Services", href: "services.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "process", label: "Process", href: "process.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  var ARROW = '<svg class="arrow" viewBox="0 0 16 10" aria-hidden="true"><path d="M0 5h15M11 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1"/></svg>';
  var ARROW_UP = '<svg class="arrow" viewBox="0 0 12 12" aria-hidden="true" style="width:11px;height:11px"><path d="M1 11L11 1M3 1h8v8" fill="none" stroke="currentColor" stroke-width="1"/></svg>';

  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.7-2.4 6.8-5.6 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.3 1-1 2.2-1.4 2.9A10 10 0 1 0 12 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.6V21h2.9z"/></svg>'
  };

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Header & footer ---------- */
  function navLinks() {
    return NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
    }).join("");
  }

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header" + (header.hasAttribute("data-solid") ? " site-header--solid" : "");
    header.innerHTML =
      '<div class="container">' +
        '<a class="logo" href="index.html" aria-label="' + esc(S.name) + ' home"><img src="' + esc(S.logo) + '" alt="' + esc(S.name) + ' logo" width="160" height="40"></a>' +
        '<nav class="nav" aria-label="Main">' + navLinks() + "</nav>" +
        '<div class="header-cta">' +
          '<a class="btn btn--sm" href="contact.html#quote">Get a Quote ' + ARROW_UP + "</a>" +
          '<button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>' +
        "</div>" +
      "</div>";

    var menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.innerHTML = navLinks() + '<a class="btn btn--solid" href="contact.html#quote">Get a Quote ' + ARROW + "</a>";
    document.body.appendChild(menu);

    var toggle = header.querySelector(".menu-toggle");
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { document.body.classList.remove("menu-open"); document.body.style.overflow = ""; }
    });

    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    var socials = Object.keys(S.social || {}).filter(function (k) { return S.social[k] && ICONS[k]; }).map(function (k) {
      return '<a href="' + esc(S.social[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + ICONS[k] + "</a>";
    }).join("");
    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-brand"><a class="logo" href="index.html"><img src="' + esc(S.logo) + '" alt="' + esc(S.name) + ' logo" width="160" height="40"></a><small>' + esc(S.tagline) + "</small></div>" +
        '<nav class="footer-nav" aria-label="Footer">' + NAV.map(function (n) { return '<a href="' + n.href + '">' + n.label + "</a>"; }).join("") + "</nav>" +
        '<div class="social">' + socials + "</div>" +
        '<p class="copyright" style="margin:0">© ' + new Date().getFullYear() + " " + esc(S.name) + ". All rights reserved.</p>" +
      "</div>";
  }

  /* Fill any element with data-site="phone|email|address|hours|name" */
  document.querySelectorAll("[data-site]").forEach(function (el) {
    var key = el.getAttribute("data-site");
    if (!S[key]) return;
    el.textContent = S[key];
    if (el.tagName === "A" && key === "email") el.href = "mailto:" + S.email;
    if (el.tagName === "A" && key === "phone") el.href = "tel:" + S.phone.replace(/[^\d+]/g, "");
  });

  /* ---------- Hero slider ---------- */
  var hero = document.querySelector("[data-hero]");
  if (hero) {
    var slides = hero.querySelectorAll(".hero__slide");
    var dots = hero.querySelectorAll(".hero__dot");
    var current = 0, timer;
    var show = function (i) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      // restart dot animation
      void dots[current].offsetWidth;
      dots[current].classList.add("is-active");
    };
    var start = function () { clearInterval(timer); timer = setInterval(function () { show(current + 1); }, 7000); };
    dots.forEach(function (d, i) { d.addEventListener("click", function () { show(i); start(); }); });
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
  }

  /* ---------- Project rendering helpers ---------- */
  function projectUrl(p) { return "project.html?id=" + encodeURIComponent(p.id); }

  function tileHTML(p, opts) {
    opts = opts || {};
    return (
      '<a class="tile reveal" href="' + projectUrl(p) + '">' +
        '<div class="tile__img"><img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy" decoding="async"></div>' +
        '<div class="tile__meta"><div>' +
          '<div class="tile__title">' + esc(p.title) + "</div>" +
          (opts.showCategory ? '<div class="tile__cat">' + esc(p.category) + " · " + esc(p.location) + "</div>" : '<div class="tile__loc">' + esc(p.location) + "</div>") +
        "</div>" + ARROW + "</div>" +
      "</a>"
    );
  }

  /* Home: featured projects */
  var featured = document.getElementById("featured-projects");
  if (featured) {
    var list = PROJECTS.filter(function (p) { return p.featured; });
    if (list.length < 3) list = list.concat(PROJECTS.filter(function (p) { return !p.featured; })).slice(0, 3);
    featured.innerHTML = list.slice(0, 3).map(function (p) { return tileHTML(p); }).join("");
  }
  document.querySelectorAll("[data-project-count]").forEach(function (el) { el.textContent = PROJECTS.length; });

  /* Projects archive: filters, search, load-more */
  var archive = document.getElementById("project-archive");
  if (archive) {
    var PAGE_SIZE = 12;
    var params = new URLSearchParams(location.search);
    var state = { cat: params.get("category") || "All", q: "", shown: PAGE_SIZE };
    var filtersEl = document.getElementById("project-filters");
    var searchEl = document.getElementById("project-search");
    var countEl = document.getElementById("project-count");
    var moreWrap = document.getElementById("load-more");
    var moreBtn = moreWrap.querySelector("button");
    var moreText = moreWrap.querySelector("small");
    var bar = moreWrap.querySelector(".progress i");

    var cats = ["All"].concat(window.PROJECT_CATEGORIES || []);
    if (cats.indexOf(state.cat) === -1) state.cat = "All";
    filtersEl.innerHTML = cats.map(function (c) {
      return '<button class="filter" type="button" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");

    var filtered = function () {
      var q = state.q.trim().toLowerCase();
      return PROJECTS.filter(function (p) {
        if (state.cat !== "All" && p.category !== state.cat) return false;
        if (!q) return true;
        return [p.title, p.location, p.category, p.summary, p.materials].join(" ").toLowerCase().indexOf(q) > -1;
      });
    };

    var render = function (append) {
      var items = filtered();
      var visible = items.slice(0, state.shown);
      filtersEl.querySelectorAll(".filter").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-cat") === state.cat); });
      countEl.textContent = items.length + (items.length === 1 ? " project" : " projects") + (state.cat !== "All" ? " in " + state.cat : "");
      if (!items.length) {
        archive.innerHTML = '<p class="empty" style="grid-column:1/-1">No projects match your search yet.</p>';
      } else if (append) {
        var startAt = archive.children.length;
        archive.insertAdjacentHTML("beforeend", visible.slice(startAt).map(function (p) { return tileHTML(p, { showCategory: true }); }).join(""));
      } else {
        archive.innerHTML = visible.map(function (p) { return tileHTML(p, { showCategory: true }); }).join("");
      }
      var remaining = items.length - visible.length;
      moreWrap.style.display = items.length ? "" : "none";
      moreBtn.style.display = remaining > 0 ? "" : "none";
      moreText.textContent = "Showing " + visible.length + " of " + items.length;
      bar.style.width = (items.length ? (visible.length / items.length) * 100 : 0) + "%";
      observeReveals();
    };

    var syncUrl = function () {
      var u = new URL(location.href);
      if (state.cat === "All") u.searchParams.delete("category"); else u.searchParams.set("category", state.cat);
      history.replaceState(null, "", u);
    };

    filtersEl.addEventListener("click", function (e) {
      var b = e.target.closest(".filter"); if (!b) return;
      state.cat = b.getAttribute("data-cat"); state.shown = PAGE_SIZE; syncUrl(); render();
    });
    var t;
    searchEl.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () { state.q = searchEl.value; state.shown = PAGE_SIZE; render(); }, 150);
    });
    moreBtn.addEventListener("click", function () { state.shown += PAGE_SIZE; render(true); });
    render();
  }

  /* Project detail page */
  var detail = document.getElementById("project-detail");
  if (detail) {
    var id = new URLSearchParams(location.search).get("id");
    var idx = PROJECTS.findIndex(function (p) { return p.id === id; });
    if (idx === -1) idx = 0;
    var p = PROJECTS[idx];
    if (p) {
      document.title = p.title + " — " + S.name;
      var set = function (sel, val) { var el = detail.querySelector(sel); if (el) el.textContent = val || ""; };
      detail.querySelector("[data-p-cover]").src = p.cover;
      detail.querySelector("[data-p-cover]").alt = p.title;
      set("[data-p-title]", p.title);
      set("[data-p-crumb]", p.title);
      set("[data-p-cat]", p.category);
      set("[data-p-summary]", p.summary);
      set("[data-p-desc]", p.description);
      var facts = [["Category", p.category], ["Location", p.location], ["Year", p.year], ["Materials", p.materials], ["Lead time", p.duration]];
      detail.querySelector("[data-p-facts]").innerHTML = facts.filter(function (f) { return f[1]; }).map(function (f) {
        return "<li><span>" + esc(f[0]) + "</span><span>" + esc(f[1]) + "</span></li>";
      }).join("");
      var imgs = (p.images && p.images.length) ? p.images : [p.cover];
      var gal = detail.querySelector("[data-p-gallery]");
      gal.innerHTML = imgs.map(function (src, i) {
        return '<button type="button" data-i="' + i + '" aria-label="Open image ' + (i + 1) + '"><img src="' + esc(src) + '" alt="' + esc(p.title) + " image " + (i + 1) + '" loading="lazy"></button>';
      }).join("");
      var related = detail.querySelector("[data-p-related]");
      if (related) related.href = "projects.html?category=" + encodeURIComponent(p.category);

      var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
      var next = PROJECTS[(idx + 1) % PROJECTS.length];
      detail.querySelector("[data-p-nav]").innerHTML =
        '<a href="' + projectUrl(prev) + '"><small>← Previous</small><strong>' + esc(prev.title) + "</strong></a>" +
        '<a href="' + projectUrl(next) + '"><small>Next →</small><strong>' + esc(next.title) + "</strong></a>";

      // Lightbox
      var lb = document.createElement("div");
      lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
      lb.innerHTML = '<img alt=""><button class="lb-close" aria-label="Close">✕</button><button class="lb-prev" aria-label="Previous">‹</button><button class="lb-next" aria-label="Next">›</button>';
      document.body.appendChild(lb);
      var lbImg = lb.querySelector("img"), cur = 0;
      var open = function (i) { cur = (i + imgs.length) % imgs.length; lbImg.src = imgs[cur]; lbImg.alt = p.title; lb.classList.add("is-open"); document.body.style.overflow = "hidden"; };
      var close = function () { lb.classList.remove("is-open"); document.body.style.overflow = ""; };
      gal.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) open(+b.getAttribute("data-i")); });
      lb.querySelector(".lb-close").onclick = close;
      lb.querySelector(".lb-prev").onclick = function () { open(cur - 1); };
      lb.querySelector(".lb-next").onclick = function () { open(cur + 1); };
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("is-open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") open(cur - 1);
        if (e.key === "ArrowRight") open(cur + 1);
      });
    }
  }

  /* ---------- Quote form (Web3Forms) ---------- */
  var form = document.getElementById("quote-form");
  if (form) {
    var keyInput = form.querySelector('input[name="access_key"]');
    if (keyInput && S.web3formsKey) keyInput.value = S.web3formsKey;
    var status = document.getElementById("form-status");
    var submitBtn = form.querySelector('button[type="submit"]');

    // Pre-select a service from ?service= in the URL
    var svc = new URLSearchParams(location.search).get("service");
    if (svc) form.querySelectorAll('input[name="Cupboards required"]').forEach(function (c) { if (c.value === svc) c.checked = true; });

    var showStatus = function (msg, type) {
      status.textContent = msg;
      status.className = "form-status is-visible is-" + type;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!form.querySelector('input[name="Cupboards required"]:checked')) {
        showStatus("Please choose at least one type of cupboard you need.", "error");
        return;
      }
      if (!keyInput.value || keyInput.value.indexOf("YOUR_") === 0) {
        showStatus("This form isn't connected yet — add your Web3Forms access key in assets/js/config.js.", "error");
        return;
      }
      var data = new FormData(form);
      // Combine multiple checkbox selections into one readable line
      var picks = data.getAll("Cupboards required");
      data.delete("Cupboards required");
      if (picks.length) data.append("Cupboards required", picks.join(", "));
      data.set("subject", "New quote request — " + (data.get("name") || "Website"));
      data.set("from_name", S.name + " Website");

      submitBtn.disabled = true;
      var label = submitBtn.innerHTML;
      submitBtn.textContent = "Sending…";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.reset();
            showStatus("Thank you — your quote request has been received. We'll be in touch within one business day.", "success");
          } else {
            showStatus(res.message || "Something went wrong. Please try again or email us directly.", "error");
          }
        })
        .catch(function () { showStatus("We couldn't send your request. Please check your connection or email us directly.", "error"); })
        .finally(function () { submitBtn.disabled = false; submitBtn.innerHTML = label; status.scrollIntoView({ behavior: "smooth", block: "nearest" }); });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }) : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("is-in");
    });
  }
  observeReveals();
})();
