import { Component, OnInit } from '@angular/core';

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
      class: 'circle',
      nameButton: '1'
    },
    {
      class: 'circle-active',
      nameButton: '2'
    },
    {
      class: 'circle',
      nameButton: '3'
    }
  ];




  constructor() { }

  ngOnInit(): void {
  }


}
