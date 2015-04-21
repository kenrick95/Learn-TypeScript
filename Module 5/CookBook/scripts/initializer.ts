var recipeCategories: RecipeCategories;
var renderer = null;

window.onload = () => { 
    var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
    categoriesSelect.onchange = () => loadRecipes();

    var loader = new RecipeLoader("/JSON/recipeTypes.json");
    loader.load();

    renderer = new Renderer();
};

function loadRecipes() {
    var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
    try {
        var category = recipeCategories.items
            .filter(i => i.name === el.value)
            .reduce(i => (new BaseRecipeCategory()));

        renderer.renderCategory(category);
    }
    catch (ex) { alert(ex.message) }
}
  




