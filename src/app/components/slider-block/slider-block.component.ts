import { Component, Directive, HostBinding, HostListener, OnInit } from '@angular/core';

// @Directive ({
//   selector: 'appSliderBlock'
// })

@Component({
  selector: 'app-slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.css']
})
export class SliderBlockComponent implements OnInit {


  title = "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap"
  author = "Michael Hopkins"
  source = [
    {
      class: 'circle-test'
    },
    {
      class: 'circle-test'
    },
    {
      class: 'circle-test'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }


}
