const fetch = require("node-fetch");
const query = require("with-query");

fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
    type: "public",
    q: "chicken",
    app_id: "1c14057a",
    app_key: "f3dd743e3bce0d8211bc4fd914272de2",
}))
    .then((response) => response.json())
    .then((data) => console.log(data))