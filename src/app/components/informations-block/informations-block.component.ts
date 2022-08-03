import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations-block',
  templateUrl: './informations-block.component.html',
  styleUrls: ['./informations-block.component.css'],
})
export class InformationsBlockComponent implements OnInit {

  infofrmation = [
    {
      id: 1,
      numberInfo: `548`,
      descInfo: `projects completed`,
      src: `/assets/images/pe-7-s-portfolio.png`,
      alt: `portfolio`,
    },
    {
      id: 2,
      numberInfo: `1465`,
      descInfo: `working hours`,
      src: `/assets/images/pe-7-s-clock.png`,
      alt: `clock`,
    },
    {
      id: 3,
      numberInfo: `612`,
      descInfo: `positive feedbacks`,
      src: `/assets/images/pe-7-s-star.png`,
      alt: `star`,
    },
    {
      id: 4,
      numberInfo: `735`,
      descInfo: `happy clients`,
      src: `/assets/images/pe-7-s-like.png`,
      alt: `like`,
    },
  ]


  constructor() { }

  ngOnInit(): void { }
}
