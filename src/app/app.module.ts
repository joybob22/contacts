import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CreateContactComponent} from "../components/createContact/createContact";
import {MainContactComponent} from "../components/mainContact/mainContact";
import {SpecificContactComponent} from "../components/specificContact/specificContact";
import {ContactService} from "../service/contactService";
import {EditContactComponent} from "../components/editContact/editContact";


@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    MainContactComponent,
    SpecificContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'createContact', component: CreateContactComponent },
      { path: 'mainContact', component: MainContactComponent },
      { path: 'contact/:id', component: SpecificContactComponent },
      { path: 'editContact/:id', component: EditContactComponent },
      { path: '', redirectTo: 'mainContact', pathMatch: 'full'}
      // { path: '**', component: PageNotFoundComponent}
    ], {useHash: true})
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
