var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//TODO
//Make RecipeCategory inherit from BaseRecipeCategory
//HINT: Use the "extends" keyword
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    //TODO
    //Add a constructor that takes the following parameters:
    //1. name: string
    //2. foodGroups: FoodGroup[]
    //3. description: string 
    //Make the description parameter public so that TypeScript
    //automatically generates a member variable. 
    //Hint: Use the "public" keyword.
    //Within the constructor, forward the "name" and "foodGroups"
    //parameter values to the base class
    //HINT: Use the "super" keyword
    function RecipeCategory(name, foodGroups, description) {
        _super.call(this, name, foodGroups);
        this.description = description;
        // this.description = description;
    }
    return RecipeCategory;
})(BaseRecipeCategory);
//# sourceMappingURL=recipeCategory.js.map