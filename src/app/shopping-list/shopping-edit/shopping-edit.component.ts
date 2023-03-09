import { Component, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('shoppingListForm') slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(
      this.slForm.value.name,
      this.slForm.value.amount
    )
    this.shoppingListService.addIngredient(newIngredient);
  }
}
