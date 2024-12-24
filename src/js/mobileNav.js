// mobileNav.js

export function setupMobileNav() {
    document.addEventListener("DOMContentLoaded", function () {
        const navTrigger = document.querySelector(".js-nav-trigger");
        const mobileNav = document.querySelector(".mobile-nav");
        const closeButton = document.querySelector(".site-nav__close");

        // Function to open the nav
        function openNav() {
            mobileNav.classList.add("is-open");
        }

        // Function to close the nav
        function closeNav() {
            mobileNav.classList.remove("is-open");
        }

        // Toggle nav on hamburger click
        navTrigger.addEventListener("click", function (e) {
            e.preventDefault();
            if (mobileNav.classList.contains("is-open")) {
                closeNav();
            } else {
                openNav();
            }
        });

        // Close nav when clicking the close button
        closeButton.addEventListener("click", function (e) {
            closeNav();
        });


        // Close nav when clicking outside
        document.addEventListener("click", function (e) {
            if (mobileNav.classList.contains("is-open") && !mobileNav.contains(e.target) && !navTrigger.contains(e.target)) {
                closeNav();
            }
        });

        // Close nav when pressing the Escape key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                closeNav();
            }
        });
    });
}
