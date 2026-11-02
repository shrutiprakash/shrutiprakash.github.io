// Builds the gallery from paintings.js and runs the large-view popup.
// You shouldn't need to edit this file.

(function () {
  const $ = (id) => document.getElementById(id);

  // ----- Site details -----
  $("tagline").textContent = SITE.tagline;
  $("year").textContent = new Date().getFullYear();
  $("contact-email").textContent = SITE.email;
  $("contact-email").href = "mailto:" + SITE.email;
  if (SITE.instagram) {
    const link = document.createElement("a");
    link.href = SITE.instagram;
    link.textContent = "Instagram";
    link.rel = "noopener";
    $("contact-social").append(link);
  }

  // ----- Menu and gallery -----
  const groups = GROUPS.filter((g) => PAINTINGS.some((p) => p.group === g.id));
  const order = []; // every painting, in page order, for the previous/next arrows

  for (const g of groups) {
    const navLink = document.createElement("a");
    navLink.href = "#" + g.id;
    navLink.textContent = g.title;
    $("site-nav").append(navLink);
  }
  for (const [id, label] of [["about", "About"], ["contact", "Contact"]]) {
    const navLink = document.createElement("a");
    navLink.href = "#" + id;
    navLink.textContent = label;
    $("site-nav").append(navLink);
  }

  for (const g of groups) {
    const section = document.createElement("section");
    section.className = "group";
    section.id = g.id;
    section.innerHTML = `<h2></h2><div class="grid"></div>`;
    section.querySelector("h2").textContent = g.title;
    const grid = section.querySelector(".grid");
    const inGroup = PAINTINGS.filter((p) => p.group === g.id);
    grid.style.setProperty("--n", inGroup.length);

    for (const p of inGroup) {
      const index = order.push(p) - 1;
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <button class="card-image" type="button"><img loading="lazy" draggable="false"></button>
        <div class="card-text">
          <h3 class="card-title"></h3>
          <p class="card-meta"></p>
          <p class="card-price"><span class="price"></span><span class="status"></span></p>
        </div>`;
      const img = card.querySelector("img");
      img.src = p.image;
      img.alt = p.title;
      card.querySelector(".card-image").setAttribute("aria-label", "View " + p.title);
      card.querySelector(".card-title").textContent = p.title;
      card.querySelector(".card-meta").textContent = details(p);
      fillPrice(card.querySelector(".price"), card.querySelector(".status"), p);
      card.querySelector(".card-image").addEventListener("click", () => open(index));
      grid.append(card);
    }
    $("gallery").append(section);
  }

  // "Watercolor on paper", or "12 × 16 in · Watercolor on paper" if a size is given.
  function details(p) {
    return [p.size, p.medium].filter(Boolean).join(" · ");
  }

  function fillPrice(priceEl, statusEl, p) {
    // No price or "Available" label: visitors get in touch first.
    // Only a sold painting gets a label, so nobody asks about it.
    const sold = p.status.toLowerCase() === "sold";
    priceEl.textContent = "";
    statusEl.textContent = "Sold";
    statusEl.classList.add("is-sold");
    statusEl.style.marginLeft = "0";
    statusEl.parentElement.hidden = !sold;
  }

  // ----- Large view -----
  const viewer = $("viewer");
  let current = 0;

  function show(index) {
    current = (index + order.length) % order.length;
    const p = order[current];
    const sold = p.status.toLowerCase() === "sold";
    $("viewer-img").src = p.image;
    $("viewer-img").alt = p.title;
    $("viewer-title").textContent = p.title;
    $("viewer-meta").textContent = details(p);
    $("viewer-description").textContent = p.description || "";
    fillPrice($("viewer-price"), $("viewer-status"), p);

    const subject = `Inquiry: ${p.title}`;
    const body = `Hello Shruti,\n\nI'm interested in your painting "${p.title}". Could you share the price and let me know if it's still available?\n\nThank you,\n`;
    $("viewer-inquire").href =
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $("viewer-inquire").hidden = sold;
    $("viewer-sold-note").hidden = !sold;
  }

  function open(index) {
    show(index);
    viewer.showModal();
  }

  viewer.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) viewer.close();
    const step = e.target.closest("[data-step]");
    if (step) show(current + Number(step.dataset.step));
    // Clicking the empty paper around the painting also closes it.
    if (e.target === viewer || e.target.classList.contains("viewer-body")) viewer.close();
  });

  viewer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // Swipe left/right on phones.
  let touchX = null;
  viewer.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  viewer.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  // A small deterrent: no right-click "Save image" on paintings.
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });
})();
