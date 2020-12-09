// import { doc } from "prettier";
import { getSVGs, Loading } from "./utilities/util";


const toggleNavBar = () => {
    const btn = document.querySelector(".navBarHamburger__mainWrapper");
    const navBar = document.querySelector(".navBar__wrapper");
    const bodyHtml = document.querySelector("body");
    const action = document.querySelector(".header__wrapper");
    btn.addEventListener("click", (e) => {
        btn.classList.toggle("active");
        navBar.classList.toggle("active");
        bodyHtml.classList.toggle("block-scroll");
        action.classList.toggle("active");
    });
};

const hoverByNav = () => {
    const width = window.innerWidth > 1024;
    if (width) {
        var maker = document.querySelector("#hoverByNav");
        var item = document.querySelectorAll(".navBar__item");

        function init(e) {
            maker.style.left = e.offsetLeft + "px";
            maker.style.width = e.offsetWidth + "px";
        }
        item.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                init(e.target);
            })
        })
    }
}

const scrollEventPage = () => {
    window.addEventListener("scroll", (e) => {
        const header = document.querySelector('header').offsetHeight;
        const height = window.scrollY > header;
        if (height) {
            document.querySelector("header").classList.add("scroll");
        } else {
            document.querySelector("header").classList.remove("scroll");
        }
    })
}

const initSwiperContact = () => {
    const sw = new Swiper(".slider-item__index-4  .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        // autoplay: {
        // 	delay: 2500,
        // 	disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
				slidesPerView: 1,
			},
            425: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    })
}

// RANGE SALARY
// const Salary = () => {
//     const items_salary = document.querySelector("span");
//     const inputSlider = document.querySelector("input");

//     inputSlider.oninput = (() => {
//         let value = inputSlider.value;
//         items_salary.textContent = value;
//     });
// }


document.addEventListener("DOMContentLoaded", () => {
    getSVGs();
    Loading();
    toggleNavBar();
    hoverByNav();
    scrollEventPage();
     initSwiperContact();
    // Salary();
});