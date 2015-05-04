var recipeCategories;
var renderer = null;
window.onload = function () {
    var categoriesSelect = document.getElementById('RecipeCategory');
    //FROM MODULE 6
    //categoriesSelect.onchange currently doesn't do anything.
    //Assign a lambda expression to "onchange" that when called, 
    //invokes the "loadRecipes" function that you'll see below. 
    //The lambda parentheses will be empty.
    //HINT: Refer to Module 4:Functions if you need help writing the lambda.
    categoriesSelect.onchange = function () { return loadRecipes(); };
    //FROM MODULE 6
    //Create a new RecipeLoader instance and name it "loader".
    //Pass the following string into the RecipeLoader's constructor:
    //  '/JSON/recipeTypes.json'
    //HINT: Use the "new" keyword to create the instance.
    var loader = new RecipeLoader('/JSON/recipeTypes.json');
    //FROM MODULE 6 
    //Call the loader object's load() function ("loader" is the object 
    //you created in the previous TODO)
    loader.load();
    renderer = new Renderer();
};
function loadRecipes() {
    var el = document.getElementById('RecipeCategory');
    try {
        var category = recipeCategories.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new RecipeCategory({
            name: el.value,
            foodGroups: item.foodGroups,
            description: item.description,
            examples: item.examples
        }); });
        renderer.renderCategory(category);
    }
    catch (ex) {
        alert(ex.message);
    }
}
//# sourceMappingURL=initializer.js.map