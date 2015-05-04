//TODO: 
//Modify this class to it implements the IBaseRecipeCategory interface
var BaseRecipeCategory = (function () {
    //FROM MODULE 6:
    //Add constructor using the variable names above
    //as the parameters (so you'll have two parameters). 
    //Assign the parameter value to the associated member variables.
    function BaseRecipeCategory(name, foodGroups) {
        this.foodGroups = [];
        this.name = name;
        this.foodGroups = foodGroups;
    }
    return BaseRecipeCategory;
})();
//# sourceMappingURL=baseRecipeCategory.js.map