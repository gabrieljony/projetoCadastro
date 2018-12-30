import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteSearchComponent } from './cliente-search/cliente-search.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteCreateComponent,
    ClienteDetailsComponent,
    ClienteListComponent,
    ClienteSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
