import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  public names:string[]=['Oyin','Daniel','Ayo','Olu']
  public name:string = 'Hello, How are you doing?'
  getNames(){
    return  this.names
  }
  getname(){
    return this.name
  }
}
