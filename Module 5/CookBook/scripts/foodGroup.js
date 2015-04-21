var FoodGroup = (function () {
    function FoodGroup() {
    }
    Object.defineProperty(FoodGroup.prototype, "name", {
        //TODO: Create a get and set block for the member variable above. 
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return FoodGroup;
})();
//# sourceMappingURL=foodGroup.js.map