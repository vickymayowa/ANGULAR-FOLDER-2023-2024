import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

interface FoodInterface {
  name:string,
  price:number,
  quantity:number,
  category:string,
  availability:string,
}

@Component({
  selector: 'app-state2',
  templateUrl: './state2.component.html',
  styleUrls: ['./state2.component.css']
})
export class State2Component {
  itemObj:FoodInterface = {
    name:'',
    price:0,
    quantity:0,
    category:'',
    availability:'',
  }
  constructor(public itemService:StateService){}
  ngOnInit(){
    // console.log(this.itemService);
    this.itemService.subBehaviour.subscribe(data=>{
      this.itemObj = data
      console.log(data);
    },(error)=>{
      console.log(error);
      
    })
    
  }
}
