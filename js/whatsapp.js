const contactButton = document.getElementById("whatsappContact");
const floatingButton = document.getElementById("floatingWhatsapp");

/**
 * Opens WhatsApp Chat
 */
function openWhatsApp() {

    const phone = CONFIG.WHATSAPP_NUMBER;

    const message = encodeURIComponent(CONFIG.WHATSAPP_MESSAGE);

    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");

}

/**
 * Contact Button
 */
contactButton.addEventListener("click", function (e) {

    e.preventDefault();

    openWhatsApp();

});

/**
 * Floating Button
 */
floatingButton.addEventListener("click", function (e) {

    e.preventDefault();

    openWhatsApp();

});