define(["require", "exports"], function (require, exports) {
    var Example = (function () {
        function Example(example) {
            this.ingredients = [];
            this.name = example.name;
            this.ingredients = example.ingredients;
            this.prepTime = example.prepTime;
        }
        return Example;
    })();
    exports.Example = Example;
});
//# sourceMappingURL=recipeExample.js.map