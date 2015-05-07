
import RecipeInterfaces = require('interfaces');
export class FoodGroup implements RecipeInterfaces.IFoodGroup {
        name: string;

        constructor(name: string) {
            //FROM MODULES 6-8:
            //Assign the "name" parameter to the 
            //"name" member variable
            this.name = name;
        }

    }
