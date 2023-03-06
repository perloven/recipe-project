import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', [new Ingredient('Test ingredient', 1)],
      'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/5:4/w_4171,h_3337,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg'),
    new Recipe('Banana bread', 'Moist and delicious', [new Ingredient('Banana', 2), new Ingredient('Flour', 3)],
      'https://www.simplyrecipes.com/thmb/tR-5eHAZ3lgNR6Yvu3yxdHMNpk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice() // Copy array with slice.
  }
}
