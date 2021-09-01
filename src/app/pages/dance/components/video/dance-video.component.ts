import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { HeroVideoService } from 'src/app/hero/hero-video.service';

@Component({
  selector: 'ps-dance-video',
  templateUrl: './dance-video.component.html',
  styleUrls: ['./dance-video.component.scss'],
})
export class DanceVideoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('psDanceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  constructor(private heroVideo: HeroVideoService) {}

  ngAfterViewInit(): void {
    this.heroVideo.loadVideo(this.danceVideo.nativeElement);
  }

  ngOnDestroy(): void {
    this.heroVideo.destroy();
  }
}
