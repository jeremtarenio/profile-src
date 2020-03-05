import { Component, OnInit, HostListener } from '@angular/core';

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
    console.log(`scrolling to ${id}`);
    const el = document.getElementById(id);

    window.scrollTo({
      top: el.offsetTop - 64,
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
  onScroll(event) {
    this.scrolled = true;
    this.scrolled = window.pageYOffset === 0 ? false : true;
  }

}
