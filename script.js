
    // Current year
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();


    // Header shadow when scrolling

    const header = document.getElementById("mainHeader");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    // Close mobile menu after clicking a link

    document.querySelectorAll(
        "#mainNavigation .nav-link"
    ).forEach(function(link) {

        link.addEventListener("click", function() {

            const menu =
                document.getElementById("mainNavigation");

            const bsCollapse =
                bootstrap.Collapse.getInstance(menu);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        });

    });

    // ========================================
// BACK TO TOP
// ========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
