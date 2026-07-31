const serviceContainer = document.getElementById("serviceContainer");

/**
 * Loading UI
 */
function showLoading() {
  serviceContainer.innerHTML = `
        <div class="loading">
            Loading Price List...
        </div>
    `;
}

/**
 * Empty State
 */
function showEmpty() {
  serviceContainer.innerHTML = `
        <div class="empty">
            No services available.
        </div>
    `;
}

/**
 * Create Service Card
 */
function createServiceCard(service) {
  return `
       <div class="service-card">

    <div class="image-container">

        <img
            class="service-image"
            src="${service.Image}"
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

    </div>

</div>
    `;
}

/**
 * Render Services
 */
function renderServices(services) {
  if (!services || services.length === 0) {
    showEmpty();
    return;
  }

  let html = "";

  services.forEach((service) => {
    html += createServiceCard(service);
  });

  serviceContainer.innerHTML = html;
}
