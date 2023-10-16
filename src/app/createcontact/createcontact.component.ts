import { Component } from '@angular/core';

interface contactInterface {
    Firstname:string,
    Lastname:string,
    Email:string,
    Phone:string,
    Gender:string,
    Password:string,
}

@Component({
  selector: 'app-contact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class ContactComponent {
  public firstname:string= ''
  public lastname :string= ''
  public email:string= ''
  public phone :string= ''
  public gender:string = ''
  public password:string = ''
  public contactArray:contactInterface[]=[]

    ngOnInit(){
      if(localStorage["contactDetails"]){
        this.contactArray = JSON.parse(localStorage.getItem("contactDetails")!)
        console.log(this.contactArray);
      }else{
        this.contactArray=[]
      }
    }
  addContact() {
    let contactObject = {
      Firstname:this.firstname,
      Lastname:this.lastname,
      Email:this.email,
      Phone:this.phone,
      Gender:this.gender,
      Password:this.password,
    }
    this.contactArray.push(contactObject)
    console.log(this.contactArray)
    localStorage.setItem("contactDetails",JSON.stringify(this.contactArray))
  }
  deleteUser(index:number){
    // console.log(index)
    this.contactArray.splice(index,1)
    localStorage.setItem("contactDetails",JSON.stringify(this.contactArray))
  }
}
