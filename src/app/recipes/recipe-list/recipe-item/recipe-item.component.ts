import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() id: number;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  onSelected() {
    this.router.navigate([this.id], { relativeTo: this.route })
    //this.recipeService.recipeSelected.emit(this.recipe)
  }
}
