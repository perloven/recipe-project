import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDefaultComponent } from "./recipes/recipe-default/recipe-default.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeDefaultComponent, pathMatch: 'full' },
      { path: ':id', component: RecipeDetailComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' }},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
