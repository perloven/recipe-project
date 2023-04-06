import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    /*ErrorPageComponent,*/
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
