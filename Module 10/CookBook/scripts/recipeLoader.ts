/// <reference path="typings/jquery.d.ts" />
import $ = require('jquery');

import RecipeInterfaces = require('interfaces');
import FoodGroup = require('foodGroup');
import RecipeCategories = require('RecipeCategories');
import RecipeCategory = require('RecipeCategory');
import RecipeCategorySummary = require('RecipeCategorySummary');
import Renderer = require('renderer');
import RecipeExample = require('recipeExample');
import Ingredient = require('ingredient');

export class RecipeLoader {
    constructor(public url: string, public renderer: Renderer.Renderer) {}
    recipeCategories;

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);        
        });
    }

    mapData(data) {
        if (data) {
            var categories: any[] = data.recipeCategories;
            //TODO
            //Change RecipeCategories to use the new generic type.
            //Pass IRecipeCategory as the type
            this.recipeCategories = new RecipeCategories.RecipeCategories<RecipeInterfaces.IRecipeCategory>();

            //TODO
            //Create a new RecipeCategories object named recipeCategoriesSummary
            //and pass an IRecipeCategorySummary as the generic value.
            var recipeCategoriesSummary = new RecipeCategories.RecipeCategories<RecipeInterfaces.IRecipeCategorySummary>();

            categories.forEach((category) => {
                var recipeCategory = new RecipeCategory.RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
                });
                this.recipeCategories.items.push(recipeCategory);

                //TODO
                //Create a new RecipeCategorySummary instance and pass
                //the category.title and category.details into the constructor.
                //Once the class is created add it into the recipeCategoriesSummary
                //object's items collection
                //HINT: The constructor object passed must match the IRecipeCategorySummary interface
                //HINT: Use the push() function
                var recipeCategorySummary = new RecipeCategorySummary.RecipeCategorySummary({
                    text: category.title,
                    title: category.details
                });
                recipeCategoriesSummary.items.push(recipeCategorySummary);
            });
            
            //Render the categories into the select
            this.renderer.renderCategories(recipeCategoriesSummary);
        }
        else {
            this.renderer.renderError();
        }
    }

    getFoodGroups(category): FoodGroup.FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new FoodGroup.FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category): RecipeInterfaces.IExample[] {
        return category.examples.map((example) => { 
            return new RecipeExample.Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example): Ingredient.Ingredient[] {
        return example.ingredients.map((value) => {
            return new Ingredient.Ingredient(value);
        });
    }
} 