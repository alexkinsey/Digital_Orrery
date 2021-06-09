const baseURL = "https://spacey-ca0c8-default-rtdb.europe-west1.firebasedatabase.app/0.json";

export default {
    async getPlanets() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    async getOnePlanet(id) {
        return fetch(baseURL + id)
        .then(res => res.json());
    }
}
