import { Component } from '@angular/core';

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent {
  public MsgTochild=''
  public msgToChild2=''

  sendMsg(){
    this.msgToChild2=this.msgToChild2
    console.log(this.msgToChild2)
  }
}
