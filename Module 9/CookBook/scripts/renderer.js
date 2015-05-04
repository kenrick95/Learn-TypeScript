var Renderer = (function () {
    function Renderer() {
    }
    //Example how the RecipeCategories<T> generic is used.
    Renderer.prototype.renderCategories = function (recipeCategoriesSummary) {
        var recipeSelect = document.getElementById('RecipeCategory');
        recipeCategoriesSummary.items.forEach(function (category) {
            var opt = document.createElement('option');
            opt.setAttribute('title', category.title);
            opt.innerHTML = category.text;
            recipeSelect.appendChild(opt);
        });
    };
    Renderer.prototype.renderCategory = function (category) {
        //Update foodgroups bullet points
        var foodGroups = document.getElementById('FoodGroups');
        foodGroups.value = '';
        var html = '<ul>';
        for (var i = 0, len = category.foodGroups.length; i < len; i++) {
            html += '<li>' + category.foodGroups[i].name + '</li>';
        }
        foodGroups.innerHTML = html + '</ul>';
        //Update description
        var el = document.getElementById('recipeDesc');
        el.innerHTML = category.description;
        this.renderExamples(category);
    };
    Renderer.prototype.renderExamples = function (category) {
        //Update examples
        var examples = document.getElementById('examples');
        examples.value = '';
        var html = '<ol>';
        for (var i = 0, len = category.examples.length; i < len; i++) {
            var example = category.examples[i];
            var ingredients = example.ingredients.map(function (ingredient) {
                return ingredient.name;
            });
            html += '<li>' + '<h4>' + example.name + ' </h4>' + '<strong>Ingredients: </strong>' + ingredients.join(', ') + '<br /><strong>Preparation Time: </strong>' + example.prepTime + '</li>';
        }
        examples.innerHTML = html + '</ol>';
    };
    Renderer.prototype.renderError = function () {
        var examples = document.getElementById('examples');
        examples.value = 'Unable to load data!';
    };
    return Renderer;
})();
//# sourceMappingURL=renderer.js.map