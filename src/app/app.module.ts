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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatIconModule } from '@angular/material/icon';
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
import { ApiFormComponent } from './api-form/api-form.component';
import { EventchildComponent } from './eventchild/eventchild.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { RegisterComponent } from './register/register.component';
import { MaterialComponent } from './material/material.component';
// import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterbackendComponent } from './registerbackend/registerbackend.component';
import { LoginbackendComponent } from './loginbackend/loginbackend.component';
import { DashboardbackendComponent } from './dashboardbackend/dashboardbackend.component';

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
    ApiFormComponent,
    EventchildComponent,
    EventparentComponent,
    RegisterComponent,
    MaterialComponent,
    RegisterbackendComponent,
    LoginbackendComponent,
    DashboardbackendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
