import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from "@angular/forms";
import { ShowPetInfoComponent } from './show-pet-info/show-pet-info.component';
import {AngularUsingBootstrapComponent} from "./angular-using-bootstrap/angular-using-bootstrap.component";
import { SingleCalculatorComponent } from './single-calculator/single-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    ShowPetInfoComponent,
    AngularUsingBootstrapComponent,
    SingleCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
