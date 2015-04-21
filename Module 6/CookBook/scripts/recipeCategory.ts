//TODO
//Make RecipeCategory inherit from BaseRecipeCategory
//HINT: Use the "extends" keyword
class RecipeCategory extends BaseRecipeCategory {

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
    constructor(name: string, foodGroups: FoodGroup[], public description: string) {
        super(name, foodGroups);
        // this.description = description;
    }


} 