import { Component , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() sendPost = ''
  @Output() commentEmitter = new EventEmitter
  
  comment:string = ''
  
  sendComment(){
    this.commentEmitter.emit(this.comment)
  }
}
