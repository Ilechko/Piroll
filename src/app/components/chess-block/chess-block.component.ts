import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-block',
  templateUrl: './chess-block.component.html',
  styleUrls: ['./chess-block.component.css']
})
export class ChessBlockComponent implements OnInit {

  source = [
    {
      sequenceNumber: `1`,
      class: `image-container img-gray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `2`,
      class: `image-container img-whitegray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `3`,
      class: `image-container img-gray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `4`,
      class: `image-container img-whitegray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `5`,
      class: `image-container img-whitegray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `6`,
      class: `image-container img-gray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `7`,
      class: `image-container img-whitegray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
    {
      sequenceNumber: `8`,
      class: `image-container img-gray`,
      imgSrc: `/assets/images/pe-7-s-look.png`,
      alt: ``,
      isActive: true,
    },
  ]

  show(item: any): void {
    item.isActive = false
  }

  hide(item: any): void {
    item.isActive = true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
