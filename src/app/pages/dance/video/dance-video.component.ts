import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeroVideoService } from 'src/app/pages/hero/hero-video.service';

@Component({
  selector: 'ps-dance-video',
  templateUrl: './dance-video.component.html',
  styleUrls: ['./dance-video.component.scss'],
})
export class DanceVideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('psDanceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  constructor(private heroVideo: HeroVideoService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.heroVideo.loadVideo(this.danceVideo.nativeElement);
  }

  ngOnDestroy(): void {
    this.heroVideo.destroy();
  }
}
