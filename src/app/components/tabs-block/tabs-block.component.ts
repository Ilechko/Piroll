import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-block',
  templateUrl: './tabs-block.component.html',
  styleUrls: ['./tabs-block.component.css']
})
export class TabsBlockComponent implements OnInit {

  titleDiamond = "ui / ux design"
  descriptionDiamond = "Be set fourth land god darkness make it wherein own"
  titleArc = "web development"
  descriptionArc = "A she'd them bring void moving third she'd kind fill"
  titlePhone = "app / mobile"
  descriptionPhone = "Dominion man second spirit he, earth they're creeping"
  titleJoy = "game design"
  descriptionJoy = "Morning his saying moveth it multiply appear life be"
  titlePlane = "SEO / marketing"
  descriptionPlane = "Give won't after land fill creeping meat you, may"
  titleStar = "photography"
  descriptionStar = "Creepeth one seas cattle grass give moving saw give"
  titleMagicWand = "graphic design"
  descriptionMagicWand = "Open, great whales air rule for, fourth life whales"
  titlePaintBucket = "illustrations"
  descriptionPaintBucket = "Whales likeness hath, man kind for them air two won't"


  source = [
    {
      title: 'ui / ux design',
      description: 'Be set fourth land god darkness make it wherein own',
      src: '/assets/pictures/pe-7-s-diamond.png',
      alt: 'diamond'
    },
    // перерахуй всі інші обєкти і виведи їх за допомогою ngFor
    // Так html документ буде менший і читабельніший
    {

    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
