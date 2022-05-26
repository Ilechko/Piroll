import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-block',
  templateUrl: './partners-block.component.html',
  styleUrls: ['./partners-block.component.css']
})
export class PartnersBlockComponent implements OnInit {

  images = [
    {
      src: "/assets/pictures/partners/1.jpg",
      alt: "partners"
    },
    {
      src: "/assets/pictures/partners/2.jpg",
      alt: "partners"
    },
    {
      src: "/assets/pictures/partners/3.jpg",
      alt: "partners"
    },
    {
      src: "/assets/pictures/partners/4.jpg",
      alt: "partners"
    },
    {
      src: "/assets/pictures/partners/5.jpg",
      alt: "partners"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
