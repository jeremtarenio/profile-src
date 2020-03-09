import { Component, OnInit, HostListener } from '@angular/core';
import { debounce } from './debouncer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  expanded = false;
  scrolled = false;

  ngOnInit() {

  }

  scroll(id) {
    const el = document.getElementById(id);

    window.scrollTo({
      top: el.offsetTop - 56,
      behavior: 'smooth'
    });
  }

  scrollToHome() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  expand() {
    this.expanded = !this.expanded;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  @debounce()
  onScroll(event) {
    this.scrolled = true;
    this.scrolled = window.pageYOffset === 0 ? false : true;
  }

}
