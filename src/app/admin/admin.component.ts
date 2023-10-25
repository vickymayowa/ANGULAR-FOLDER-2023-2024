import { Component } from '@angular/core';
import { ArrayService } from '../services/array.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public nameService:ArrayService){}
  ngOnInit(){
    console.log(this.nameService.getNames());
    
  }
}
