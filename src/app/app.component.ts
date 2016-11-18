import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to the Thunderdome';
  showDataBinding: boolean = false;
  showLife: boolean = false;

  test: string = "Lifecycle";

  showData() {
    this.showDataBinding = !this.showDataBinding;
  }

  showLifecycle() {
    this.showLife = !this.showLife;
  }
}
