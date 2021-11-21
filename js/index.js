(() => {
  const refs = {
    openModalImg: document.querySelector(".my-photo"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    lightboxOverlay: document.querySelector(".backdrop"),
    modal: document.querySelector("[data-modal]"),
  };

  const { openModalImg, closeModalBtn, lightboxOverlay, modal } = refs;

  openModalImg.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  lightboxOverlay.addEventListener("click", clickOverlay);

  function openModal() {
    modal.classList.remove("is-hidden");
    window.addEventListener("keydown", pressEsc);
  }
  function closeModal() {
    modal.classList.add("is-hidden");
    window.removeEventListener("keydown", pressEsc);
  }
  function clickOverlay(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  function pressEsc(event) {
    if (event.code === "Escape") {
      closeModal();
    }
  }
})();
