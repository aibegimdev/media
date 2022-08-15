const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const modal= document.querySelector(".about-btn button")
modal.addEventListener("click", () => {
    document.querySelector(".about-modal").style.display="block"
})
const modalClose=document.querySelector(".about-modal-block-square div")
modalClose.addEventListener("click",() => {
    document.querySelector(".about-modal").style.display = "none"
})