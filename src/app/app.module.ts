import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CreateContactComponent} from "../components/createContact/createContact";
import {MainContactComponent} from "../components/mainContact/mainContact";


@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    MainContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'createContact', component: CreateContactComponent },
      { path: 'mainContact', component: MainContactComponent },
      { path: '', redirectTo: 'mainContact', pathMatch: 'full'}
      // { path: '**', component: PageNotFoundComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
