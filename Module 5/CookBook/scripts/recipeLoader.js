var RecipeLoader = (function () {
    function RecipeLoader(url) {
        this.url = url;
        this.request = new XMLHttpRequest();
    }
    RecipeLoader.prototype.load = function () {
        var _this = this;
        this.request.onload = function (e) { return _this.mapData(); };
        this.request.open('get', this.url, true);
        this.request.send();
    };
    RecipeLoader.prototype.mapData = function () {
        //get the data from the JSON file
        var data = JSON.parse(this.request.responseText);
        if (data) {
            var categories = data.recipeCategories;
            //Map foodgroups data to TS object
            recipeCategories = new RecipeCategories();
            categories.forEach(function (category) {
                var foodGroups = [];
                category.foodGroups.forEach(function (foodGroup) {
                    var group = new FoodGroup();
                    group.name = foodGroup.title;
                    foodGroups.push(group);
                });
                var recipeCategory = new BaseRecipeCategory();
                recipeCategory.name = category.title;
                recipeCategory.foodGroups = foodGroups;
                recipeCategories.items.push(recipeCategory);
            });
            //Render the categories into the select
            renderer.renderCategories(recipeCategories);
        }
    };
    return RecipeLoader;
})();
//# sourceMappingURL=recipeLoader.js.map