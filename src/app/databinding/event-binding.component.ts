import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
    @Output() clicked = new EventEmitter<string>();

    // @Output could take an argument as a string to rename the property that will become available
    // I.E. clicked could be 'clickable' in argument. It's not a best practice however. 

    onClicked() {
      this.clicked.emit('It works!');
    }
}
