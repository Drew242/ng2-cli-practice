import { Component, Input, ViewChild, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable: number = 1000;

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;
  // Unless of course you use Viewchild (referring to comment in lifecycle template)
  // Can also use @ContentChild() Decorator

  constructor() { }

  ngOnChanges() {
      this.log('ngOnChanges');
  }

  ngOnInit() {
      this.log('ngOnInit');
  }

  ngDoCheck() {
      this.log('ngDoCheck');
  }

  ngAfterContentInit() {
      this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
      this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
      this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
      this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
