import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public formbuilder:FormBuilder){}
    public forms = this.formbuilder.group({
      first_name:["",Validators.required],
      lastname:["",Validators.required],
      email:["",[Validators.required,Validators.maxLength(10)]],
      password:["",Validators.required],
      age:["",Validators.required],
    })
    ngOnInit(){
      this.send()
    }
    send(){
      console.log(this.forms.value.age);
      this.forms.controls["first_name"].setValue('')
      this.forms.controls["age"].setValue("")
      
    }

  }
