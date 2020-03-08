import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isCardToggled = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isCardToggled = !this.isCardToggled;
  }

}
