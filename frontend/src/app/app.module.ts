
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//nodulos de angular material
import { MaterialModuleModule } from './material-module/material-module/material-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudComponent } from './components/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudComponent
  ],
  imports: [
    MaterialModuleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
