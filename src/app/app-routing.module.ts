import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TodoComponent } from './todo/todo.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './guards/admin.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'pipe',component:PipeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'editContact', component:EditContactComponent},
  {path: 'todo', component:TodoComponent},
  {path:"contact",children:[
    {path:"",component:ContactComponent},
    {path:":id",component:DisplayContactComponent},
  ]},
  {path:"**",component:ErrorpageComponent},
  {path:"userapi",component:DisplayApiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
