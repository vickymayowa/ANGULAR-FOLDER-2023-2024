import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from "../backend/service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerbackend',
  templateUrl: './registerbackend.component.html',
  styleUrls: ['./registerbackend.component.css']
})
export class RegisterbackendComponent {
  // public registerbackend = this.formbuilder.group({
  //   firstname:['',Validators.required],
  //   lastname:['',Validators.required],
  //   age:['',Validators.required],
  //   email:['',[Validators.required,Validators.email]],
  //   address:['',Validators.required],
  //   phonenumber:['',Validators.required],
  //   city:['',Validators.required],
  //   password:['',Validators.required],
  // })

  // submitForm(){
  //   if(this.registerbackend.valid){
  //     this.services.sendsignup(this.registerbackend.value).subcribe(data=>{
  //       console.log(data);
  //     },(error=>{
  //       console.log(error);
  //     }))
  //   }
  // }
   constructor(public formbuilder: FormBuilder, public services: BackendService, private router: Router) { }
 
  
  public forms = this.formbuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    phone_number : ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.maxLength(10)]],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    complexion: ['', Validators.required], 
    department: ['', Validators.required],
    password: ['', [Validators.required, Validators.maxLength(8)]],
  })

  submitForm() {
    console.log(this.forms.value);

    this.services.sendsignup(this.forms.value).subscribe(
      (data: any) => {
        console.log(data);
        // Handle success, e.g., redirect to another page
      },
      (error: any) => {
        console.log(error);
        // Handle error
      }
    );
    this.forms.reset(); // Reset the form after submission
    console.log("Welcome back Home");
  }
}
