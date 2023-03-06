import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 1),
    new Ingredient('Apple', 5)
  ]

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(ingredient);
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
}
