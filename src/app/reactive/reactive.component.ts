import { Component } from '@angular/core';
import { ReactiveService } from '../services/reactive.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  constructor(public newapi:ReactiveService){}
  public receivenames:string[]=[]
  ngOnInit(){
    console.log('Hello worlds')
    console.log(this.newapi.getNames());
    this.receivenames = this.newapi.getNames()
    console.log(this.receivenames)    
  }
}
