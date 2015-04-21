class RecipeLoader {
    request = new XMLHttpRequest();

    constructor(public url: string) {}

    load() {
        this.request.onload = (e) => this.mapData();
        this.request.open('get', this.url, true);
        this.request.send();
    }

    mapData() {
        //get the data from the JSON file
        var data = JSON.parse(this.request.responseText);

        if (data) {
            var categories: any[] = data.recipeCategories;
            //Map foodgroups data to TS object
            recipeCategories = new RecipeCategories();
            categories.forEach((category) => {
                var foodGroups: FoodGroup[] = [];
                category.foodGroups.forEach((foodGroup) => {
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
    }
} 