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
        //class logic
        var data = JSON.parse(this.request.responseText);
        if (data) {
            var categories = data.recipeCategories;
            //Map category data from XHR call to our TS RecipeCategories
            recipeCategories = new RecipeCategories();
            categories.forEach(function (category) {
                //Map foodgroups data to TS object
                var foodGroups = [];
                category.foodGroups.forEach(function (foodGroup) {
                    var group = new FoodGroup(foodGroup.title);
                    foodGroups.push(group);
                });
                var recipeCategory = new RecipeCategory(category.title, foodGroups, category.details);
                recipeCategories.items.push(recipeCategory);
            });
            //Render the categories into the select
            renderer.renderCategories(recipeCategories);
        }
    };
    return RecipeLoader;
})();
//# sourceMappingURL=recipeLoader.js.map