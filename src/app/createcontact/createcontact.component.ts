import { Component } from '@angular/core';

interface contactInterface {
    Fullname:string,
    Username:string,
    Email:string,
    Phone:string,
    Gender:string,
    Password:string,
    status:string,
}

@Component({
  selector: 'app-contact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class ContactComponent {
  public fullname:string= ''
  public username :string= ''
  public email:string= ''
  public phone :string= ''
  public gender:string = ''
  public password:string = ''
  public status:string = 'Active'
  public address:string = ''
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
      Fullname:this.fullname,
      Username:this.username,
      Email:this.email,
      Phone:this.phone,
      Gender:this.gender,
      Password:this.password,
      status:this.status,
      Address:this.address,
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
