async function fetchServices() {

    try {

        const response = await fetch(CONFIG.API_URL);

        const data = await response.json();

        console.log(data); // <-- Add this

        return data;

    } catch (error) {

        console.error(error);

        return [];

    }

}