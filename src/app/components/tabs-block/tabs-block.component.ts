import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-block',
  templateUrl: './tabs-block.component.html',
  styleUrls: ['./tabs-block.component.css']
})
export class TabsBlockComponent implements OnInit {

  source = [
    {
      title: 'ui / ux design',
      description: 'Be set fourth land god darkness make it wherein own',
      src: '/assets/pictures/pe-7-s-diamond.png',
      alt: 'diamond'
    },
    {
      title: "web development",
      description: "A she'd them bring void moving third she'd kind fill",
      src: "/assets/pictures/pe-7-s-arc.png",
      alt: "arc"
    },
    {
      title: "app / mobile",
      description: "Dominion man second spirit he, earth they're creeping",
      src: "/assets/pictures/pe-7-s-phone.png",
      alt: "phone"
    },
    {
      title: "game design",
      description: "Morning his saying moveth it multiply appear life be",
      src: "/assets/pictures/pe-7-s-joy.png",
      alt: "joy"
    },
    {
      title: "SEO / marketing",
      description: "Give won't after land fill creeping meat you, may",
      src: "/assets/pictures/pe-7-s-plane.png",
      alt: "plane"
    },
    {
      title: "photography",
      description: "Creepeth one seas cattle grass give moving saw give",
      src: "/assets/pictures/pe-7-s-star.png",
      alt: "star"
    },
    {
      title: "graphic design",
      description: "Open, great whales air rule for, fourth life whales",
      src: "/assets/pictures/pe-7-s-magic-wand.png",
      alt: "magicWand"
    },
    {
      title: "illustrations",
      description: "Whales likeness hath, man kind for them air two won't",
      src: "/assets/pictures/pe-7-s-paint-bucket.png",
      alt: "paintBucket"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
