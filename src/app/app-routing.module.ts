import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TodoComponent } from './todo/todo.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'editContact', component:EditContactComponent},
  {path: 'todo', component:TodoComponent},
  {path:"contact",children:[
    {path:"",component:ContactComponent},
    {path:":id",component:DisplayContactComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
