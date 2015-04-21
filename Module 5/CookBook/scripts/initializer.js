var recipeCategories;
var renderer = null;
window.onload = function () {
    var categoriesSelect = document.getElementById('RecipeCategory');
    categoriesSelect.onchange = function () { return loadRecipes(); };
    var loader = new RecipeLoader("/JSON/recipeTypes.json");
    loader.load();
    renderer = new Renderer();
};
function loadRecipes() {
    var el = document.getElementById('RecipeCategory');
    try {
        var category = recipeCategories.items.filter(function (i) { return i.name === el.value; }).reduce(function (i) { return (new BaseRecipeCategory()); });
        renderer.renderCategory(category);
    }
    catch (ex) {
        alert(ex.message);
    }
}
//# sourceMappingURL=initializer.js.map