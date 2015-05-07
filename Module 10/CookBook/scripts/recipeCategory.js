var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'baseRecipeCategory'], function (require, exports, BaseRecipeCategory) {
    var RecipeCategory = (function (_super) {
        __extends(RecipeCategory, _super);
        function RecipeCategory(recipeCategory) {
            _super.call(this, recipeCategory.name, recipeCategory.foodGroups);
            this.description = recipeCategory.description;
            this.examples = recipeCategory.examples;
        }
        return RecipeCategory;
    })(BaseRecipeCategory.BaseRecipeCategory);
    exports.RecipeCategory = RecipeCategory;
});
//# sourceMappingURL=RecipeCategory.js.map