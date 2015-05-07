import RecipeLoader = require('recipeLoader');
import Renderer = require('renderer');
import RecipeCategories = require('recipeCategories');
import RecipeCategory = require('recipeCategory');
import RecipeInterfaces = require('interfaces');
var recipeCategories: RecipeCategories.RecipeCategories<RecipeInterfaces.IRecipeCategory>;
var renderer = null;
var loader: RecipeLoader.RecipeLoader = null;

window.onload = () => { 
    var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
    //FROM MODULES 6-8
    //categoriesSelect.onchange currently doesn't do anything.
    //Assign a lambda expression to "onchange" that when called, 
    //invokes the "loadRecipes" function that you'll see below. 
    //The lambda parentheses will be empty.
    //HINT: Refer to Module 4:Functions if you need help writing the lambda.
    categoriesSelect.onchange = () => loadRecipes();

    //FROM MODULES 6-8
    //Create a new RecipeLoader instance and name it "loader".
    //Pass the following string into the RecipeLoader's constructor:
    //  '/JSON/recipeTypes.json'
    //HINT: Use the "new" keyword to create the instance.
    loader = new RecipeLoader.RecipeLoader('/JSON/recipeTypes.json', renderer);

    //FROM MODULES 6-8 
    //Call the loader object's load() function ("loader" is the object 
    //you created in the previous TODO)
    loader.load();

    renderer = new Renderer.Renderer();
    loader.renderer = renderer;
};

function loadRecipes() {
    var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
    try {
        var category = loader.recipeCategories.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //return the item
            .reduce(item => new RecipeCategory.RecipeCategory({
                name: el.value,
                foodGroups: item.foodGroups,
                description: item.description,
                examples: item.examples
            }));
        renderer.renderCategory(category);
    }
    catch (ex) { console.error(ex.message) }
}
  




