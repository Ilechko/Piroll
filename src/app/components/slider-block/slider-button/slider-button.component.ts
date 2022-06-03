import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.css']
})
export class SliderButtonComponent implements OnInit {

  active: boolean = false;

  changeProperty(): void {
    this.active = !this.active
  }



  constructor() { }

  ngOnInit(): void {
  }

}
