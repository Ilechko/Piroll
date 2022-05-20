import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.css']
})
export class SliderBlockComponent implements OnInit {

  title = "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap"
  autor = "Michael Hopkins"

  constructor() { }

  ngOnInit(): void {
  }

}
