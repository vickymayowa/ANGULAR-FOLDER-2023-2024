import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './createcontact/createcontact.component';
import { PricingComponent } from './pricing/pricing.component';
import { TodoComponent } from './todo/todo.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtocartComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    PricingComponent,
    TodoComponent,
    DisplayContactComponent,
    EditContactComponent,
    // MatIconModule,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
