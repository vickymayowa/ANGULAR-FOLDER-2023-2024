import { Component } from '@angular/core';
import { GetApiService } from '../services/get-api.service';

@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})
export class DisplayApiComponent {
  apiArray:any= []
  constructor (public apiService:GetApiService){}
  ngOnInit(){
    this.apiArray
    this.apiService.getApiArray().subscribe(response=>{
      this.apiArray = response
      console.log(this.apiArray);
    },(error)=>{
      console.log(error);
      
    })
  }
}
