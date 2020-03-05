import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  innerWidth: any;
  isScreenSmall = false;

  constructor() { }

  ngOnInit() {
  }

  onClickLinkedIn() {
    window.open('http://ph.linkedin.com/in/jeremtarenio', '_blank');
  }

  onClickEmail() {
    window.location.href = 'mailto:jeremtarenio@gmail.com';
  }

  onClickNumber() {
    window.location.href = 'tel:09293042737';
  }

}
