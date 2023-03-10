import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs";

@Injectable()
export class DataStorageService {
  private readonly baseUrl = 'https://recipe-project-461d1-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.baseUrl, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  loadRecipes() {
    this.http
      .get<Recipe[]>(this.baseUrl)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      })
  }
}
