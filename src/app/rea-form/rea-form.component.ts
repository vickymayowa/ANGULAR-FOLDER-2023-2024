import { Component } from '@angular/core';
import { ReactiveService } from '../services/reactive.service';

@Component({
  selector: 'app-rea-form',
  templateUrl: './rea-form.component.html',
  styleUrls: ['./rea-form.component.css']
})
export class ReaFormComponent {
  constructor(public newapi:ReactiveService){}
  public receivenames:string[]=[]
  ngOnInit(){
    console.log('Hello worlds')
    console.log(this.newapi.getNames());
    this.receivenames = this.newapi.getNames()
    console.log(this.receivenames)    
  }
}
