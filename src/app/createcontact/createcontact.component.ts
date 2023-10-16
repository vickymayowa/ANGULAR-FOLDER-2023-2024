import { Component } from '@angular/core';

interface contactInterface {
    Firstname:string,
    Lastname:string,
    Email:string,
    Phone:string,
    Gender:string
}

@Component({
  selector: 'app-contact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class ContactComponent {
  public firstname = ''
  public lastname = ''
  public email = ''
  public phone = ''
  public gender = ''
  public contactArray:contactInterface[]=[]

  addContact() {
    let contactObject = {
      Firstname:this.firstname,
      Lastname:this.lastname,
      Email:this.email,
      Phone:this.phone,
      Gender:this.gender,
    }
    this.contactArray.push(contactObject)
    console.log(this.contactArray)
  }
}
