import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TodoComponent } from './todo/todo.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
// import { adminGuard } from './guards/admin.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { PipeComponent } from './pipe/pipe.component';
import { State1Component } from './state1/state1.component';
import { ParentComponent } from './parent/parent.component';
// import { ReaFormComponent } from './rea-form/rea-form.component';
import { ApiFormComponent } from './api-form/api-form.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'pipe',component:PipeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'editContact', component:EditContactComponent},
  {path: 'state1',component:State1Component},
  {path: 'parent',component:ParentComponent},
  {path: 'todo', component:TodoComponent},
  {path:"contact",children:[
    {path:"",component:ContactComponent},
    {path:":id",component:DisplayContactComponent},
  ]},
  {path:"**",component:ErrorpageComponent},
  {path:"userapi",component:DisplayApiComponent},
  // {path:"reactive",component:ReaFormComponent},
  {path:"apiForm",component:ApiFormComponent},
  {path:"event",component:EventparentComponent},
  {path:"register",component:RegisterComponent},
  {path:"reactive",component:ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
