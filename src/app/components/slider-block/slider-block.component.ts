import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.css']
})
export class SliderBlockComponent implements OnInit {

  source = [
    {
      title: `Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else`,
      author: `Les Brown`,
      class: 'circle',
      nameButton: `1`,
      isActive: false,
    },
    {
      title: `Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap`,
      author: `Michael Hopkins`,
      isActive: true,
      class: `circle-active`,
      nameButton: `2`,
    },
    {
      title: `Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you do not have a plan`,
      author: `Larry Winget`,
      isActive: false,
      class: `circle`,
      nameButton: `3`,
    }
  ];

  activeText: any = this.source[1]; // text default active item

  makeActive(item: any): void {
    this.source.forEach(unit => {
      unit.isActive = false;
      this.activeText = item; // make text on click
    })
    item.isActive = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
