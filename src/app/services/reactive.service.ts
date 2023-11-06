import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  names:string[]=['Oyin','Daniel','Ayo','Olu']
  
  getNames(){
    return  this.names
  }

}
