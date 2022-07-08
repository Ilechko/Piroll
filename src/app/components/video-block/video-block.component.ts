import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.css']
})
export class VideoBlockComponent implements OnInit {

  mainTitle = 'Our Work Process';
  description = 'Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years.';
  isActive = false;

  @ViewChild('video') videoComponent!: ElementRef<any>;

  toggleVideo(video: any): void {
    const isPaused = video.paused;

    isPaused ? video.play() : video.pause();

    this.isActive = isPaused;
  }; 

  loadVideo(): void {
    this.videoComponent.nativeElement.load();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
