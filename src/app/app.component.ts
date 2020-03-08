import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-website';

  ngOnInit(): void {
    AOS.init({
      disable: 'mobile',
      once: true,
      duration: 600/* ,
      anchorPlacement: 'top-center' */
    });
  }


}
