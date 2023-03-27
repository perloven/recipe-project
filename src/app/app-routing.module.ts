import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
  /* This stopped working when recipe routing was split off
  , {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  }, {
    path: '**',
    redirectTo: '/not-found'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
