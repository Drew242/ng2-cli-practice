import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  @Input() result: number = 0;

  // See Comments in Event-Binding for Output. Same is true.
}
