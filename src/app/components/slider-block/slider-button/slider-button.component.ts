import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.css']
})
export class SliderButtonComponent implements OnInit {

  active!: boolean;


  changeProperty(): void {
    this.active = !this.active
  }


  @Input()
  inSliderButton!: string




  constructor() { }

  ngOnInit(): void {
  }

}
