import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, pipe, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  private readonly baseUrl = 'https://recipe-project-461d1-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.baseUrl, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  loadRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Recipe[]>(this.baseUrl, {
          params: new HttpParams().set('auth', user.token)
        })
      }),
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
