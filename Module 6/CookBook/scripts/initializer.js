var recipeCategories;
var renderer = null;
window.onload = function () {
    var categoriesSelect = document.getElementById('RecipeCategory');
    //TODO
    //categoriesSelect.onchange currently doesn't do anything.
    //Assign a lambda expression to "onchange" that when called, 
    //invokes the "loadRecipes" function that you'll see below. 
    //The lambda parentheses will be empty.
    //HINT: Refer to Module 4:Functions if you need help writing the lambda.
    categoriesSelect.onchange = function () { return loadRecipes(); };
    //TODO
    //Create a new RecipeLoader instance and name it "loader".
    //Pass the following string into the RecipeLoader's constructor:
    //  '/JSON/recipeTypes.json'
    //HINT: Use the "new" keyword to create the instance.
    var loader = new RecipeLoader('/JSON/recipeTypes.json');
    //TODO 
    //Call the loader object's load() function ("loader" is the object 
    //you created in the previous TODO)
    loader.load();
    renderer = new Renderer();
};
function loadRecipes() {
    var el = document.getElementById('RecipeCategory');
    try {
        var category = recipeCategories.items.filter(function (i) { return i.name === el.value; }).reduce(function (i) { return (new RecipeCategory(el.value, i.foodGroups, i.description)); });
        renderer.renderCategory(category);
    }
    catch (ex) {
        alert(ex.message);
    }
}
//# sourceMappingURL=initializer.js.map