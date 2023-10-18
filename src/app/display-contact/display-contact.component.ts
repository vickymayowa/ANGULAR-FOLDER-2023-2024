import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface contactInterface {
  Fullname:string,
  Username:string,
  Email:string,
  Phone:string,
  Gender:string,
  Password:string,
  Status:string,
  Address:string,
}

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
  constructor(public actRoute:ActivatedRoute){}
  contactIndex : number = 0 
  contactObject:contactInterface = {
    Fullname:'',
    Username:'',
    Email:'',
    Address:'',
    Phone:'',
    Gender:'',
    Password:'',
    Status:'Active',
  }

  ngOnInit(){
    let contactArray = JSON.parse(localStorage["contactDetails"])

    // console.log(contactArray);
    // console.log(this.actRoute.snapshot.params["id"]);

    this.contactIndex = this.actRoute.snapshot.params["id"]
    console.log(this.contactIndex);

    contactArray[this.contactIndex]
    this.contactObject = contactArray[this.contactIndex]
    console.log(contactArray);
    
    // this.contactObject = contactArray.find((contact:contactInterface,index:number)=>this.contactIndex==index)
  }
}
