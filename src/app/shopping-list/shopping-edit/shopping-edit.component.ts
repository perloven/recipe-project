import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  onAddIngredient(name: string, amount: string) {
    console.log('Adding ingredient ' + name + " (" + amount + ")")
  }
}
