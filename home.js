document.querySelectorAll(
        '.home-page a[href^="#"]'
    ).forEach(function(link) {

        link.addEventListener("click", function(e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });