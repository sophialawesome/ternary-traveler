const api = "http://localhost:8080/api"

export default {
    getAllEntries() {
        return fetch(`${api}`)
            .then(response => response.json());
    },
    addEntry(entry) {
        return fetch(`${api}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    }
}
