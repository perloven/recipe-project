import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/5:4/w_4171,h_3337,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg'),
    new Recipe('Another recipe', 'Another description', '')
  ];
}
