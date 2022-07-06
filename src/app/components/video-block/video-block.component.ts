import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.css']
})
export class VideoBlockComponent implements OnInit {

  mainTitle = 'Our Work Process';
  description = 'Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years.';
  isActive = false;

  playStop(): void {
    let video: any = document.querySelector('.video-player');
    if (video.paused) {
      video.play();
      this.isActive = true;
      // Відображаємо картинку постера після відтворення відео
      video.addEventListener('ended', function () {
        video.load();
      }, false);
    } else {
      video.pause();
      video.addEventListener('pause', function () {
        video.load();
      }, false);
      this.isActive = false;
    }
  }; 

  constructor() { }

  ngOnInit(): void {
  }
}
