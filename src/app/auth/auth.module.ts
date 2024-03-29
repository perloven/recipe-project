import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild([{path: 'auth', component: AuthComponent}]),
    SharedModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {}
