import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date;
  constructor() { }

  ngOnInit() {
    this.date = new Date().getFullYear();
  }


  onClickLinkedIn() {
    window.open('http://ph.linkedin.com/in/jeremtarenio', '_blank');
  }

  onClickIg() {

  }

  onClickFb() {

  }

  onClickEmail() {
    window.location.href = 'mailto:jeremtarenio@gmail.com';
  }

  onClickNumber() {
    window.location.href = 'tel:09293042737';
  }

  scroll(id) {
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
}
