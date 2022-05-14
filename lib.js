const fetch = require("node-fetch");
const query = require("with-query");
const open = require("open");



function recipes(food, diet, health, meal)  // print recipe list
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
        .then((data) => {console.log("Pick one of the recipes");
            for(let i = 0; i < data.hits.length; i++)                      // print
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
        .then((data) => {console.log("Pick one of the recipes");
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
        .then((data) => {console.log("Pick one of the recipes");
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
        .then((data) => {console.log("Pick one of the recipes");
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
        .then((data) => {console.log("Pick one of the recipes");
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
        .then((data) => {console.log("Pick one of the recipes");
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
        .then((data) => {console.log("Pick one of the recipes");
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
        .then((data) => {console.log("Pick one of the recipes");
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
    .then((data) => {console.log("Pick one of the recipes");
        for(let i = 0; i < data.hits.length; i++)                          // 입력값이랑 레시피 이름이랑 완전히 똑같을 경우 연결 
        {
            if(recipe.toUpperCase() === data.hits[i].recipe.label.toUpperCase())
            {
                open(data.hits[i].recipe.url);
            }
            
        }
        
    })
}


  

module.exports = {
    recipes,
    link,
};