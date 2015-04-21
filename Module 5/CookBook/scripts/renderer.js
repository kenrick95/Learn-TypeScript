var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.renderCategories = function (recipeCategories) {
        var recipeSelect = document.getElementById('RecipeCategory');
        recipeCategories.items.forEach(function (category) {
            var opt = document.createElement('option');
            opt.innerHTML = category.name;
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
    };
    return Renderer;
})();
//# sourceMappingURL=renderer.js.map