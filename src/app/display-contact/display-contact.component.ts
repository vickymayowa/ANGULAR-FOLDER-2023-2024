import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
  constructor(public actRoute:ActivatedRoute){}
  ngOnInit(){
    let contactArray = JSON.parse(localStorage["contactDetails"])
    console.log(contactArray);
    console.log(this.actRoute);
    
    
  }
}
