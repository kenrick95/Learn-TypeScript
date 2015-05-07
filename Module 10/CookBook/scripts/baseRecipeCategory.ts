//FROM MODULES 6-8: 
//Copy your BaseRecipeCategory class code
import FoodGroup = require('FoodGroup');
    export class BaseRecipeCategory {
        name: string;
        foodGroups: FoodGroup.FoodGroup[] = [];
        constructor(name: string, foodGroups: FoodGroup.FoodGroup[]) {
            this.name = name;
            this.foodGroups = foodGroups;
        }
    }
