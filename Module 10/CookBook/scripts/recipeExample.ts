//FROM MODULE 7&8:
//Modify the class below so that it implements the IExample interface
//and the constructor accepts a parameter typed as IExample.
import RecipeInterfaces = require('interfaces');
import Ingredient = require('ingredient');

    export class Example implements RecipeInterfaces.IExample {
        name: string;
        ingredients: Ingredient.Ingredient[] = [];
        prepTime: string;

        constructor(example: RecipeInterfaces.IExample) {
            this.name = example.name;
            this.ingredients = example.ingredients;
            this.prepTime = example.prepTime;
        }
    }


