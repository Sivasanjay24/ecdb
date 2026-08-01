/* ===========================
   LOADING
=========================== */

function showLoading() {

    document.getElementById("serviceContainer").innerHTML = `
        <div class="loading">
            Loading services...
        </div>
    `;

}

/* ===========================
   EMPTY
=========================== */

function showEmpty() {

    document.getElementById("serviceContainer").innerHTML = `
        <div class="empty">
            No services available.
        </div>
    `;

}

let allServices = [];

/* ===========================
   CREATE CATEGORY TABS
=========================== */

function createCategoryTabs(services) {

    const container = document.getElementById("categoryTabs");

    container.innerHTML = "";

    const mainCategories = [

        "Blouse",

        "Saree",

        "Maxi",

        "Chudidhar",

        "Pattu Pavadai"

    ];

    // All categories present in the sheet
    const sheetCategories = [...new Set(
        services.map(service => service.Category)
    )];

    // Categories that are not part of the main list
    const otherCategories = sheetCategories.filter(
        category => !mainCategories.includes(category)
    );

    const tabs = [...mainCategories];

    if (otherCategories.length > 0) {

        tabs.push("Other");

    }

    tabs.forEach((category, index) => {

        let count = 0;

        if (category === "Other") {

            count = services.filter(service =>
                otherCategories.includes(service.Category)
            ).length;

        } else {

            count = services.filter(service =>
                service.Category === category
            ).length;

        }

        // Skip empty tabs
        if (count === 0) return;

        const button = document.createElement("button");

        button.className =
            index === 0
                ? "category-tab active"
                : "category-tab";

        button.dataset.category = category;

        button.innerHTML = `
            ${category}
            <span class="category-count">
                (${count})
            </span>
        `;

        button.onclick = () => {

            document
                .querySelectorAll(".category-tab")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            filterCategory(category);

        };

        container.appendChild(button);

    });

}

/* ===========================
   FILTER
=========================== */

function filterCategory(category) {

    const mainCategories = [

        "Blouse",

        "Saree",

        "Maxi",

        "Chudidhar",

        "Pattu Pavadai"

    ];

    let filtered;

    if (category === "Other") {

        filtered = allServices.filter(service =>
            !mainCategories.includes(service.Category)
        );

    } else {

        filtered = allServices.filter(service =>
            service.Category === category
        );

    }

    renderServices(filtered);

}

/* ===========================
   CREATE CARD
=========================== */

function createServiceCard(service) {

    const message = encodeURIComponent(

        `Hello ELAN'S CREATION,

I'm interested in

${service.Service}

Could you please share more details?`

    );

    return `

<div class="service-card">

    <div class="image-container">

        <img

            src="${service.Image}"

            class="service-image"

            alt="${service.Service}"

        >

        <div class="image-overlay">

            <h3 class="overlay-title">

                ${service.Service}

            </h3>

        </div>

    </div>

    <div class="service-content">

        <div class="price-row">

            <span class="starting">

                Starting From

            </span>

            <span class="service-price">

                ₹${Number(service.Price).toLocaleString("en-IN")}

            </span>

        </div>

        <a

            href="https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}"

            target="_blank"

            class="card-whatsapp">

            💬 Enquire on WhatsApp

        </a>

    </div>

</div>

`;

}

/* ===========================
   RENDER
=========================== */

function renderServices(services) {

    const container =
        document.getElementById("serviceContainer");

    if (services.length === 0) {

        container.innerHTML =
            "<p>No Services Found</p>";

        return;

    }

    let html = "";

    services.forEach(service => {

        html += createServiceCard(service);

    });

    container.innerHTML = html;

}