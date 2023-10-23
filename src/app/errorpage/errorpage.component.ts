import { Component } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent {
  public showArray:number[]=[];
  constructor(public contactService:CreatecontactService){}
  ngOnInit(){
    console.log(this.contactService.getcreateContactArray());
    
    this.showArray=this.contactService.getcontactArray()
    console.log(this.showArray);
  }
}
