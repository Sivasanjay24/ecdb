/**
 * Initialize Website
 */
async function initializeWebsite() {

    showLoading();

    try {

        const services = await fetchServices();

        renderServices(services);

    } catch (error) {

        console.error(error);

        showEmpty();

    }

}

/**
 * Footer Year
 */
function setFooterYear() {

    const year = document.getElementById("year");

    year.textContent = new Date().getFullYear();

}

/**
 * Page Loaded
 */
document.addEventListener("DOMContentLoaded", () => {

    setFooterYear();

    initializeWebsite();

});