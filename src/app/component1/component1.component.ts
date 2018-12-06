import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input() cmpt:number = 5;
  @Output() childEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

   /**
   * 
   */
  increment() {
    this.cmpt++;
  }

  /**
   * 
   */
  clear() {
    this.cmpt = 0;

    // Send to parent
    this.childEvent.emit(this.cmpt);
  }


  showMessage(message: string, event: any) {
    alert('message ' + message);
    event.preventDefault();
    event.stopPropagation();
  }
}
