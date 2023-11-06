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
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReaFormComponent } from './rea-form/rea-form.component';

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
    ErrorpageComponent,
    DisplayApiComponent,
    PipeComponent,
    State1Component,
    State2Component,
    ParentComponent,
    ChildComponent,
    ReactiveComponent,
    ReaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
