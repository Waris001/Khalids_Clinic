document
        .getElementById("appointmentForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            /*
             * Replace this section with your backend API,
             * email service, WhatsApp integration, etc.
             */

            alert(
                "Thank you for contacting Dr. Khalid's Surgical Clinic. " +
                "Our team will contact you shortly."
            );

            this.reset();

        });


    /*
     * Prevent selecting past dates
     * for appointment requests.
     */

    const appointmentDate =
        document.querySelector('input[type="date"]');

    if (appointmentDate) {

        const today =
            new Date().toISOString().split("T")[0];

        appointmentDate.setAttribute(
            "min",
            today
        );

    }