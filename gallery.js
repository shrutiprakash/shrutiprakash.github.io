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

  // Menu follows the page order: About, the categories, then Contact.
  const menu = [["about", "About"], ...groups.map((g) => [g.id, g.title]), ["contact", "Contact"]];
  for (const [id, label] of menu) {
    const navLink = document.createElement("a");
    navLink.href = "#" + id;
    navLink.textContent = label;
    $("site-nav").append(navLink);
  }

  // Each category is a row (title, count and description) that opens to show its paintings.
  // Paintings inside a closed row don't load until it's opened.
  for (const g of groups) {
    const inGroup = PAINTINGS.filter((p) => p.group === g.id);
    const section = document.createElement("details");
    section.className = "group";
    section.id = g.id;
    section.open = Boolean(g.open);
    section.innerHTML = `
      <summary>
        <span class="group-head">
          <h2></h2>
          <span class="group-count"></span>
          <span class="group-toggle" aria-hidden="true"></span>
        </span>
        <p class="group-description"></p>
      </summary>
      <div class="grid"></div>
      <div class="group-end">
        <p class="group-end-note"></p>
        <div class="group-end-actions">
          <button class="button" type="button" data-end="home">Back to home</button>
          <button class="button" type="button" data-end="gallery">Restart the gallery</button>
        </div>
      </div>`;
    section.querySelector("h2").textContent = g.title;
    section.querySelector(".group-end-note").textContent = `You’ve reached the end of ${g.title}.`;
    section.querySelector(".group-description").textContent = g.description || "";
    section.querySelector(".group-count").textContent =
      inGroup.length + (inGroup.length === 1 ? " painting" : " paintings");
    const grid = section.querySelector(".grid");
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

  // Deal each group's paintings into columns left to right (1st, 2nd, 3rd across
  // the top row, and so on), matching the column counts in style.css.
  const grids = [...document.querySelectorAll(".grid")].map((grid) => ({
    grid,
    cards: [...grid.children],
  }));
  function columnsFor(count) {
    const max = matchMedia("(max-width: 640px)").matches ? 1
      : matchMedia("(max-width: 1000px)").matches ? 2 : 3;
    return Math.min(max, count);
  }
  function layOut() {
    for (const { grid, cards } of grids) {
      const n = columnsFor(cards.length);
      if (grid.childElementCount === n && grid.firstElementChild.classList.contains("grid-col")) continue;
      const cols = Array.from({ length: n }, () => {
        const col = document.createElement("div");
        col.className = "grid-col";
        return col;
      });
      cards.forEach((card, i) => cols[i % n].append(card));
      grid.replaceChildren(...cols);
    }
  }
  layOut();
  addEventListener("resize", layOut);

  // Menu links to a category open that category's row.
  function openCategory(hash) {
    const target = hash && document.getElementById(hash.slice(1));
    if (target && target.tagName === "DETAILS") target.open = true;
  }
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) openCategory(link.hash);
  });
  openCategory(location.hash);

  // At the end of a category: close every category, then go to the top of
  // the page ("Back to home") or to the list of categories ("Restart the gallery").
  document.addEventListener("click", (e) => {
    const button = e.target.closest("[data-end]");
    if (!button) return;
    document.querySelectorAll("details.group").forEach((d) => { d.open = false; });
    history.replaceState(null, "", location.pathname);
    if (button.dataset.end === "home") scrollTo(0, 0);
    else $("gallery").scrollIntoView({ block: "start" });
  });

  // ----- Opening painting -----
  const heroIndex = order.findIndex((p) => p.image === SITE.heroImage);
  if (heroIndex !== -1) {
    const hero = order[heroIndex];
    $("hero-img").src = hero.image;
    $("hero-img").alt = hero.title;
    $("hero-caption").textContent = SITE.heroCaption || hero.title;
    $("hero-open").setAttribute("aria-label", "View " + hero.title);
    $("hero-open").addEventListener("click", () => open(heroIndex));
    $("hero").hidden = false;
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
