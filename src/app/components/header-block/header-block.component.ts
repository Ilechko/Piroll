import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.css']
})
export class HeaderBlockComponent implements OnInit {

  mainTitle = 'We Design and Develop';
  description = 'We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.';

  constructor() { }

  ngOnInit(): void {
  }

}
