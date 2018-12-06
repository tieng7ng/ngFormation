import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // pour utiliser ngModel
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//=====
// Components
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { ChildSelectComponent } from './child-select/child-select.component';
import { SpecialUpPipe } from './pipe/special-up.pipe';
// Components
//=====

//=====
// Services
import { MyDataService } from './services/my-data.service';
import { HttpService } from './services/http.service'
// Services
//=====

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    ChildSelectComponent,
    SpecialUpPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MyDataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
