(function () {
  const config = window.INVITE_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const state = {
    photoIndex: 0,
    toastTimer: null,
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setText(binding, value) {
    $$(`[data-bind="${binding}"]`).forEach((node) => {
      node.textContent = value || "";
    });
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
  }

  async function copyText(text, doneMessage) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(doneMessage);
    } catch (error) {
      showToast("복사에 실패했습니다. 직접 복사해 주세요.");
    }
  }

  function bindBasicTexts() {
    const leftName = config.couple?.leftName || "임석진";
    const rightName = config.couple?.rightName || "탐켄치";
    const metaTitle = config.metaTitle || `${leftName} ♥ ${rightName} 모바일 청첩장`;

    document.title = metaTitle;
    setText("brandTitle", config.brandTitle || `${leftName[0] || "S"} ♥ ${rightName[0] || "T"}`);
    setText("heroBadge", config.hero?.badge || "SAVE THE DATE");
    setText("headline", config.hero?.headline || "저희, 결혼합니다!");
    setText("subtitle", config.hero?.subtitle || "평생 함께할 소중한 인연을 만났습니다.");
    setText("leftName", leftName);
    setText("rightName", rightName);
    setText("dateText", config.wedding?.dateText || "2027.01.09 토요일 오후 2시");
    setText("invitationMessage", config.invitationMessage || "귀한 발걸음으로 축복해 주세요.");
    setText("venueName", config.venue?.name || "예식장");
    setText("venueAddress", config.venue?.address || "주소를 입력하세요");
    setText("venueNotice", config.venue?.notice || "");
    setText("footerText", config.footerText || "Made with friendship.");

    const mapLink = $("#mapLink");
    if (mapLink) {
      const address = config.venue?.address || "";
      mapLink.href = config.venue?.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    }
  }

  function photos() {
    return Array.isArray(config.photos) && config.photos.length > 0
      ? config.photos
      : [{ src: "./assets/images/photo-01.png", alt: "대표 사진", title: "대표 사진", caption: "" }];
  }

  function renderHeroPhoto(index) {
    const items = photos();
    state.photoIndex = (index + items.length) % items.length;
    const item = items[state.photoIndex];

    const heroPhoto = $("#heroPhoto");
    if (heroPhoto) {
      heroPhoto.src = item.src;
      heroPhoto.alt = item.alt || item.title || "청첩장 사진";
    }
    const title = $("#heroPhotoTitle");
    const caption = $("#heroPhotoCaption");
    if (title) title.textContent = item.title || "사진";
    if (caption) caption.textContent = item.caption || "";
  }

  function renderGallery() {
    const grid = $("#galleryGrid");
    if (!grid) return;

    grid.innerHTML = photos()
      .map(
        (item, index) => `
          <figure class="gallery-item" tabindex="0" data-photo-index="${index}">
            <img
              src="${escapeHtml(item.src)}"
              alt="${escapeHtml(item.alt || item.title || "갤러리 사진")}"
              decoding="async"
            />
            <figcaption>
              <strong>${escapeHtml(item.title || `사진 ${index + 1}`)}</strong>
              <span>${escapeHtml(item.caption || "")}</span>
            </figcaption>
          </figure>
        `
      )
      .join("");

    $$(".gallery-item").forEach((item) => {
      const open = () => openLightbox(Number(item.dataset.photoIndex));
      item.addEventListener("click", open);
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    });
  }
  
  function openLightbox(index) {
    const item = photos()[index];
    if (!item) return;
    const dialog = $("#lightbox");
    const image = $("#lightboxImage");
    const caption = $("#lightboxCaption");
    if (!dialog || !image || !caption) return;

    image.src = item.src;
    image.alt = item.alt || item.title || "확대 사진";
    caption.textContent = [item.title, item.caption].filter(Boolean).join(" · ");

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeLightbox() {
    const dialog = $("#lightbox");
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function renderStory() {
    const list = $("#storyList");
    if (!list) return;
    const story = Array.isArray(config.story) ? config.story : [];
    list.innerHTML = story
      .map(
        (item) => `
          <li>
            <h3>${escapeHtml(item.title || "스토리")}</h3>
            <p>${escapeHtml(item.text || "")}</p>
          </li>
        `
      )
      .join("");
  }

  function renderCountdown() {
    const target = new Date(config.wedding?.dateISO || "2027-01-09T14:00:00+09:00");
    const title = $("#countdownTitle");

    function tick() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (Number.isNaN(target.getTime())) return;

      if (diff <= 0) {
        if (title) title.textContent = "오늘은 전설이 된 날";
        $("#dd").textContent = "0";
        $("#hh").textContent = "0";
        $("#mm").textContent = "0";
        $("#ss").textContent = "0";
        return;
      }

      const seconds = Math.floor(diff / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainSeconds = seconds % 60;

      $("#dd").textContent = String(days);
      $("#hh").textContent = String(hours).padStart(2, "0");
      $("#mm").textContent = String(minutes).padStart(2, "0");
      $("#ss").textContent = String(remainSeconds).padStart(2, "0");
    }

    tick();
    setInterval(tick, 1000);
  }

  function guestbookKey() {
    return `guestbook:${config.metaTitle || "wedding-prank"}`;
  }

  function readGuestbook() {
    try {
      const saved = JSON.parse(localStorage.getItem(guestbookKey()) || "[]");
      if (Array.isArray(saved) && saved.length > 0) return saved;
    } catch (error) {
      // ignore broken localStorage data
    }
    return Array.isArray(config.defaultGuestbook) ? config.defaultGuestbook : [];
  }

  function saveGuestbook(entries) {
    localStorage.setItem(guestbookKey(), JSON.stringify(entries));
  }

  function renderGuestbook() {
    const list = $("#guestbookList");
    if (!list) return;
    const entries = readGuestbook();
    list.innerHTML = entries
      .map(
        (entry) => `
          <article class="guestbook-entry">
            <strong>${escapeHtml(entry.name || "익명")}</strong>
            <p>${escapeHtml(entry.message || "")}</p>
          </article>
        `
      )
      .join("");
  }

  function addGuestbookEntry(event) {
    event.preventDefault();
    const nameInput = $("#guestName");
    const messageInput = $("#guestMessage");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !message) return;

    const entries = [{ name, message }, ...readGuestbook()].slice(0, 20);
    saveGuestbook(entries);
    renderGuestbook();
    event.currentTarget.reset();
    burstConfetti();
    showToast("축하글이 저장됐습니다. 브라우저에만 저장돼요.");
  }

  function burstConfetti() {
    const colors = ["#caa85f", "#eaa4a3", "#f6d98f", "#ffffff", "#a5833a"];
    for (let i = 0; i < 34; i += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 180}ms`;
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 1400);
    }
  }

  function observeReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.14 }
    );
    $$(".reveal").forEach((node) => observer.observe(node));
  }

  function bindActions() {
    document.addEventListener("click", (event) => {
      const actionTarget = event.target.closest("[data-action]");
      if (!actionTarget) return;
      const action = actionTarget.dataset.action;

      if (action === "prev-photo") renderHeroPhoto(state.photoIndex - 1);
      if (action === "next-photo") renderHeroPhoto(state.photoIndex + 1);
      if (action === "close-lightbox") closeLightbox();
      if (action === "copy-address") copyText(config.venue?.address || "", "주소를 복사했습니다.");
      if (action === "copy-link") copyText(config.shareUrl || window.location.href, "링크를 복사했습니다.");
    });

    const lightbox = $("#lightbox");
    if (lightbox) {
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
      });
    }

    const form = $("#guestbookForm");
    if (form) form.addEventListener("submit", addGuestbookEntry);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLightbox();
    });
  }

  function init() {
    bindBasicTexts();
    renderHeroPhoto(0);
    renderGallery();
    renderStory();
    renderCountdown();
    renderGuestbook();
    bindActions();
    observeReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

const bgm = document.getElementById("bgm");

function playBgm() {
  if (!bgm) return;
  bgm.volume = 0.35;
  bgm.play().catch(() => {
    console.log("Autoplay prevented");
  });
}

window.addEventListener("load", playBgm);
window.addEventListener("click", playBgm, { once: true });
window.addEventListener("touchstart", playBgm, { once: true });
window.addEventListener("scroll", playBgm, { once: true });
