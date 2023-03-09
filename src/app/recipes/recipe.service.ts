import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', [new Ingredient('Test ingredient', 1)],
      'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/5:4/w_4171,h_3337,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg'),
    new Recipe('Banana bread', 'Moist and delicious', [new Ingredient('Banana', 2), new Ingredient('Flour', 3), new Ingredient('Butter', 1)],
      'https://www.simplyrecipes.com/thmb/tR-5eHAZ3lgNR6Yvu3yxdHMNpk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg')
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice() // Copy array with slice.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.signalRecipesChanged();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.signalRecipesChanged();
  }

  private signalRecipesChanged(): void {
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.signalRecipesChanged();
  }
}
