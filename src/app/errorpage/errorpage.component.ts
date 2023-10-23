import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

interface ContactInterface {
  Fullname: string;
  Username: string;
  Email: string;
  Phone: string;
  Gender: string;
  Password: string;
  Status: string;
  Address: string;
  DateOfBirth: string;
  CreatedAt: Date;
  // UpdatedAt: Date;
}

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent {
  public showArray:number[]=[];
  public createContact:ContactInterface[]=[]
  constructor(public contactService:ContactService){}
  ngOnInit(){
    this.createContact=this.contactService.getcreateContactArray()
    console.log(this.createContact);
    this.showArray=this.contactService.getcontactArray()
    
  }
}
