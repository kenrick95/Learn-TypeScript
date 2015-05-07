
    //FROM MODULE 7&8:
    //Fill out the body of this class so it extends BaseRecipeCategory
    //and implements IRecipeCategory
import RecipeInterfaces = require('interfaces');
import BaseRecipeCategory = require('baseRecipeCategory');

export class RecipeCategory extends BaseRecipeCategory.BaseRecipeCategory implements RecipeInterfaces.IRecipeCategory {
        description: string;
        examples: RecipeInterfaces.IExample[];
        constructor(recipeCategory: RecipeInterfaces.IRecipeCategory) {
            super(recipeCategory.name, recipeCategory.foodGroups);
            this.description = recipeCategory.description;
            this.examples = recipeCategory.examples;
        }
    }
