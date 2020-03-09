import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export class Item {
  constructor(
    public skillName: string,
    public percent: number,
    public desc: string,
    public iconName: string
  ) {}
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontend: Item[] = [
    {
      skillName: 'CSS3',
      percent: 65,
      desc: `Been self-learning CSS through online courses since I started getting into web development (2018)`,
      iconName: 'css3'
    },
    {
      skillName: 'Bootstrap 4',
      percent: 65,
      desc: `I took an online course for bootstrap last year (2019).`,
      iconName: 'bootstrap'
    },
    {
      skillName: 'Angular 8',
      percent: 65,
      desc: `Underwent months of training for Angular 8 during my days in Tata Consultancy Services 6 months ago (2019)`,
      iconName: 'angular'
    }
  ];
  backend: Item[] = [
    {
      skillName: 'NodeJS REST API',
      percent: 65,
      desc: `After learning about java APIs during my internship, curiosity got the better of me and decided
      to learn the JavaScript way of building APIs (2019)`,
      iconName: 'nodejs'
    },
    {
      skillName: 'MySQL',
      percent: 70,
      desc: `MySQL was my first experience in relational databases. It's what we used during college (2018)`,
      iconName: 'mysql'
    }
  ];
  languages: Item[] = [
    {
      skillName: 'JavaScript',
      percent: 65,
      desc: `I started using JavaScript shortly after I became comfortable with Java (late 2018)`,
      iconName: 'javascript'
    },
    {
      skillName: 'Java',
      percent: 70,
      desc: `I've been using Java since early 2018. It's the programming language that
  made programming make sense to me.`,
      iconName: 'java'
    },
    {
      skillName: 'TypeScript',
      percent: 65,
      desc: `I started developing using TypeScript 6 months ago during our training in Angular 8 (2019)`,
      iconName: 'typescript'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  scroll(id) {
    const el = document.getElementById(id);

    window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  }

  onClickGitHub() {
    window.open('https://github.com/jeremtarenio/', '_blank');
  }

  onClickRecipe() {
    window.open('https://jeremtarenio.github.io/recipe-book/auth', '_blank');
  }


}
