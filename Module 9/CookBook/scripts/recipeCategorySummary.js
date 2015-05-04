//TODO
//Modify the class below named RecipeCategorySummary to do the following:
//1. Implements the IRecipeCategorySummary
//2. Defines two member variables:
//   text - string
//   title - string
//3. Create a constructor that accepts a single parameter
//   of type IRecipeCategorySummary
//4. Assign the values from the constructor parameter to the member variables
var RecipeCategorySummary = (function () {
    function RecipeCategorySummary(recipeCategorySummary) {
        this.text = recipeCategorySummary.text;
        this.title = recipeCategorySummary.title;
    }
    return RecipeCategorySummary;
})();
//# sourceMappingURL=recipeCategorySummary.js.map