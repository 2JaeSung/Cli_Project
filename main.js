const commander = require("commander");
const lib = require("./lib");


if(process.argv.length <= 2){
    console.log("Please type one or more keywords!");
    process.exit(1);
}


function SeperatedList(value, dummyPrevious) {
    return value.split(',');
}

let command_check = "";

let link_recipe = "";

let ingredients_recipe = "";

let food_check = "";
let diet_check = "";
let health_check = "";
let meal_check="";

commander
    .command('link')
    .argument('<recipe>')
    .action(function() {
        
    })

commander
    .command('ingredients')
    .argument('<recipe>')
    .action(function() {
        command_check = "ingredients";
        for(let i = 0; i < this.args.length; i++){
            ingredients_recipe = ingredients_recipe + this.args[i] + " "
        }
        ingredients_recipe = ingredients_recipe.slice(0, -1);
        console.log(ingredients_recipe);
    })

commander
    .command('list')
    .requiredOption('-f, --food <food_list>', 'You must enter a list of ingredients seperated by ","    ex) -f chicken,pepper', SeperatedList)
    .option('-d, --diet <diet_info>', 'Enter the numbers given to put diet_info option    {0 = balanced, 1 = high-fiber, 2 = high-protein, 3 = low-carb, 4 = low-fat, 5 = low-sodium}    ex) -d 1')
    .option('-h, --health <health_info>', 'Enter the numbers given to put health_info option    {0 = alcohol-free, 1 = vegetarian, 2 = vegan, 3 = wheat-free, 4 = sugar-conscious, 5 = gluten-free, 6 = fish-free}    ex) -h 2')
    .option('-m, --meal <meal_type>', 'Enter the numbers given to put meal_type option    {0 = Breakfast, 1 = Dinner, 2 = Launch, 3 = Snack, 4 = Teatime}    ex) -m 3')
    .action(function() {
        command_check = "list";
        food_check = this.opts().food;
        diet_check = this.opts().diet;
        health_check = this.opts().health;
        meal_check = this.opts().meal;
    })
commander.parse(process.argv);



if(command_check == "link") {
    lib.link(link_recipe);
}
else if(command_check == "ingredients") {
    lib.ingredient(ingredients_recipe);
}
else if(command_check == "list") {
    let food = "";
    let diet = "";
    let health = "";
    let meal = "";

    for(let i = 0; i < food_check.length; i++) {
        food = food + food_check[i] + " ";
    }

    switch(diet_check){
        case "0":
            diet = "balanced";
            break;

        case "1":
            diet = "high-fiber";
            break;

        case "2":
            diet = "high-protein";
            break;

        case "3":
            diet = "low-carb";
            break;

        case "4":
            diet = "low-fat";
            break;

        case "5":
            diet = "low-sodium";
            break;

        default:
            diet = 0;

    }

    switch(health_check){
        case "0":
            health = "alcohol-free";
            break;

        case "1":
            health = "vegetarian";
            break;

        case "2":
            health = "vegan";
            break;

        case "3":
            health = "wheat-free";
            break;

        case "4":
            health = "sugar-conscious";
            break;

        case "5":
            health = "gluten-free";
            break;

        case "6":
            health = "fish-free";
            break;

        default:
            health = 0;
    }

    switch(meal_check){
        case "0":
            meal = "Breakfast";
            break;

        case "1":
            meal = "Dinner";
            break;

        case "2":
            meal = "Launch";
            break;

        case "3":
            meal = "Snack";
            break;

        case "4":
            meal = "Teatime";
            break;

        default:
            meal = 0;

    }


    lib.recipes(food, diet, health, meal);

}



