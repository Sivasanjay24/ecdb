/* =====================================
   ELAN'S CREATION
===================================== */

document.addEventListener("DOMContentLoaded", init);

async function init() {

    setFooterYear();

    await loadServices();

}

/* =====================================
   LOAD SERVICES
===================================== */

async function loadServices() {

    showLoading();

    try {

        const services = await fetchServices();

        allServices = services;

        if (services.length === 0) {

            showEmpty();

            return;

        }

        createCategoryTabs(services);

        // Open first category automatically

        const firstCategory = services[0].Category;

        filterCategory(firstCategory);

    }

    catch (error) {

        console.error(error);

        showEmpty();

    }

}

/* =====================================
   FOOTER YEAR
===================================== */

function setFooterYear() {

    document.getElementById("year").textContent =
        new Date().getFullYear();

}