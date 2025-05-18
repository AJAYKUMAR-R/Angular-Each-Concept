import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifier',
  standalone: false,
  templateUrl: './notifier.component.html',
  styleUrl: './notifier.component.scss'
})
export class NotifierComponent {
  @Input() eachNotifier:any;
  @Output() notify = new EventEmitter<any>();

  onClick(obj:any){
    this.notify.emit(obj);
  }
  
}
