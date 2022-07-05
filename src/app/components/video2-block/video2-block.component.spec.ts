import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2BlockComponent } from './video2-block.component';

describe('Video2BlockComponent', () => {
  let component: Video2BlockComponent;
  let fixture: ComponentFixture<Video2BlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video2BlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2BlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
