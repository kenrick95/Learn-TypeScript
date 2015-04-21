var BaseRecipeCategory = (function () {
    function BaseRecipeCategory() {
        this._foodGroups = [];
    }
    Object.defineProperty(BaseRecipeCategory.prototype, "name", {
        //TODO: Create get and set blocks for each of the variables in the declaration above.
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "foodGroups", {
        get: function () {
            return this._foodGroups;
        },
        set: function (foodGroups) {
            this._foodGroups = foodGroups;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRecipeCategory;
})();
//# sourceMappingURL=baseRecipeCategory.js.map