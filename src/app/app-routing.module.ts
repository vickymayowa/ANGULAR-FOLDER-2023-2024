import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'todo', component:TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
