import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.css']
})
export class HeaderBlockComponent implements OnInit {

  mainTitle = 'We Design and Develop';
  description = 'We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.';
  logo = `/assets/images/logo.png`;
  button = `contact us`;

  links = [
    {
      title: `HOME`,
      href: `#`,
      class: `link`,
    },
    {
      title: `about`,
      href: `#`,
      class: `link`,
    },
    {
      title: `work`,
      href: `#`,
      class: `link`,
    },
    {
      title: `process`,
      href: `#`,
      class: `link`,
    },
    {
      title: `servicess`,
      href: `#`,
      class: `link`,
    },
    {
      title: `TESTIMONIALS`,
      href: `#`,
      class: `link`,
    },
    {
      title: `CONTACT`,
      href: `#`,
      class: `link`,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
