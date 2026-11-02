
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const result = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); //stop from reloading

        const query = searchInput.value.trim();

        fetch('superheroes.php?query=' + encodeURIComponent(query))
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request failed " + response.status);
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.error("Fetch error:", error);
                result.textContent =
                    "Something went wrong: " + error.message;
            });
    });
});
