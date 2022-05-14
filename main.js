const fetch = require("node-fetch");
const query = require("with-query");
const open = require("open");
const readline = require('readline');
const lib = require("./lib");
const { freemem } = require("os");


//lib.recipes("onion", "balanced", "wheat-free", "Dinner")

//lib.recipes("onion rings", 0, 0, 0)

//lib.link("onion rings");


fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
    type: "public",
    q: "chicken",
    app_id: "1c14057a",
    app_key: "f3dd743e3bce0d8211bc4fd914272de2",
    
}))
    .then((response) => response.json())
    .then((data) => {console.log("Pick one of the recipes");
        for(let i = 0; i < data.hits.length; i++)
        {
            console.log(i + ". " + data.hits[i].recipe.label)
        }
        console.log(data.hits[0].recipe);
        
        //open(data.hits[0].recipe.url);
        

    })


    
