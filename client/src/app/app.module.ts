import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { TranslatorTableComponent } from './translator-table/translator-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    TranslatorTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
