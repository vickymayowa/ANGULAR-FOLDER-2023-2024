import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
  constructor(public actRoute:ActivatedRoute){}
  contactIndex : number = 0 

  ngOnInit(){
    let contactArray = JSON.parse(localStorage["contactDetails"])
    console.log(contactArray);
    console.log(this.actRoute)
    console.log(this.actRoute.snapshot.params["id"]);
    this.contactIndex = this.actRoute.snapshot.params["id"]


    contactArray.find((contact:contactInterface,index:number)=>{

    })
  }
}
