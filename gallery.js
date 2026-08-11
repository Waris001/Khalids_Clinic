/* =========================================================
   GALLERY FILTER
========================================================= */

const filterButtons =
document.querySelectorAll(".gallery-filter button");

const galleryItems =
document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");

        const filter =
            this.getAttribute("data-filter");


        galleryItems.forEach(item => {

            const category =
                item.getAttribute("data-category");


            if(filter === "all" || category === filter){

                item.style.display = "block";

                item.animate(
                    [
                        {
                            opacity: 0,
                            transform: "scale(.95)"
                        },
                        {
                            opacity: 1,
                            transform: "scale(1)"
                        }
                    ],
                    {
                        duration: 400,
                        easing: "ease"
                    }
                );

            }

            else {

                item.style.display = "none";

            }

        });

    });

});



/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox =
document.getElementById("galleryLightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const lightboxCaption =
document.getElementById("lightboxCaption");

const closeButton =
document.getElementById("lightboxClose");

const previousButton =
document.getElementById("lightboxPrev");

const nextButton =
document.getElementById("lightboxNext");


let currentIndex = 0;


/* Only currently visible gallery images */

function getVisibleItems(){

    return Array.from(galleryItems)
        .filter(item =>
            item.style.display !== "none"
        );

}


/* Open image */

galleryItems.forEach(item => {

    item.addEventListener("click", function() {

        const visibleItems =
            getVisibleItems();

        currentIndex =
            visibleItems.indexOf(this);

        showImage();

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* Show image */

function showImage(){

    const visibleItems =
        getVisibleItems();

    if(!visibleItems.length) return;


    const item =
        visibleItems[currentIndex];

    const image =
        item.querySelector("img");

    const title =
        item.querySelector("h3");


    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;

    lightboxCaption.textContent =
        title ? title.textContent : "";

}


/* Close */

function closeLightbox(){

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
    "click",
    closeLightbox
);


/* Previous */

previousButton.addEventListener(
    "click",
    function(){

        const visibleItems =
            getVisibleItems();

        currentIndex--;

        if(currentIndex < 0){

            currentIndex =
                visibleItems.length - 1;

        }

        showImage();

    }
);


/* Next */

nextButton.addEventListener(
    "click",
    function(){

        const visibleItems =
            getVisibleItems();

        currentIndex++;

        if(currentIndex >= visibleItems.length){

            currentIndex = 0;

        }

        showImage();

    }
);


/* Close by clicking background */

lightbox.addEventListener(
    "click",
    function(e){

        if(e.target === lightbox){

            closeLightbox();

        }

    }
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function(e){

        if(!lightbox.classList.contains("show"))
            return;


        if(e.key === "Escape"){

            closeLightbox();

        }


        if(e.key === "ArrowLeft"){

            previousButton.click();

        }


        if(e.key === "ArrowRight"){

            nextButton.click();

        }

    }
);