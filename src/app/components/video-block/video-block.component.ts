import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.css']
})
export class VideoBlockComponent implements OnInit {

  mainTitle = 'Our Work Process';
  description = 'Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years.';
  // Нюанс. Використовувати тільки одинарні скобки в ts-js файлах. + завжди ставити я то вже сам зміню. ; 

  constructor() { }

  ngOnInit(): void {
  }
}
