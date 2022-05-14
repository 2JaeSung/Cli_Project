const fetch = require("node-fetch");
const query = require("with-query");
const open = require("open");



function recipes(food, diet, health, meal)  // print recipe list fuction
{
    if (food && diet && health && meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {  // make query 
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            diet: diet,
            health: health,
            mealType: meal,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)                      // print recipe list
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food && !diet && health && meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            health: health,
            mealType: meal,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food && diet && !health && meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            diet: diet,
            mealType: meal,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food && diet && health && !meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            diet: diet,
            health: health,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food &&!diet && !health && meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            mealType: meal,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food && !diet && health && !meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            health: health,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food && diet && !health && !meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
            diet: diet,
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else if(food && !diet && !health && !meal)
    {
        fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
            type: "public",
            q: food,
            app_id: "1c14057a",
            app_key: "f3dd743e3bce0d8211bc4fd914272de2",
    
        }))
        .then((response) => response.json())
        .then((data) => {console.log("Recipe list");
            for(let i = 0; i < data.hits.length; i++)
            {
                console.log(i + ". " + data.hits[i].recipe.label)
            }
            
        })
    }
    else
    {
        console.log("Wrong Parameter");
    }
}

function link(recipe)           // link to recipe website 
{
    fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
        type: "public",
        q: recipe,
        app_id: "1c14057a",
        app_key: "f3dd743e3bce0d8211bc4fd914272de2",

    }))
    .then((response) => response.json())
    .then((data) => {
        for(let i = 0; i < data.hits.length; i++)                          
        {
            if(recipe.toUpperCase() === data.hits[i].recipe.label.toUpperCase())          // if input and recipe name are same, link to recipe site
            {
                open(data.hits[i].recipe.url);
            }
            
        }
        
    })
}

function ingredient(recipe)       // show ingredients for cooking
{
    let cnt = 1;
    fetch(query.withQuery("https://api.edamam.com/api/recipes/v2", {
        type: "public",
        q: recipe,
        app_id: "1c14057a",
        app_key: "f3dd743e3bce0d8211bc4fd914272de2",

    }))
    .then((response) => response.json())
    .then((data) => {console.log("Ingredients for " + recipe);
        for(let i = 0; i < data.hits.length; i++)                          
        {
            if(recipe.toUpperCase() === data.hits[i].recipe.label.toUpperCase())           // if input and recipe name are same, print ingredients for cooking
            {
                console.log(cnt+ "th recipe");
                cnt++;
                for(let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++)
                {
                    console.log(j + ". " + data.hits[i].recipe.ingredientLines[j]);

                }
            }
            
        }
        
    })
}




  

module.exports = {
    recipes,
    link,
    ingredient,
};