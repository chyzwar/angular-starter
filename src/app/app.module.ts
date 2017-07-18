import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    MaterialModule
   ],
  declarations: [
    AppComponent,
    CreateComponent,
    DetailsComponent,
    SearchComponent,
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
