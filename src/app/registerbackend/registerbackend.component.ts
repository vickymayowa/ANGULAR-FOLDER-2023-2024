import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registerbackend',
  templateUrl: './registerbackend.component.html',
  styleUrls: ['./registerbackend.component.css']
})
export class RegisterbackendComponent {
  public registerbackend = this.formbuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    age:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    address:['',Validators.required],
    phonenumber:['',Validators.required],
    city:['',Validators.required],
    password:['',Validators.required],
  })

  submitForm(){
    if(this.registerbackend.valid){
      this.services.sendsignup(this.registerbackend.value).subcribe(data=>{
        console.log(data);
      },(error=>{
        console.log(error);
      }))
    }
  }
}
