import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HeroVideoService } from 'src/app/hero/hero-video.service';

@Component({
  selector: 'ps-dance-video',
  templateUrl: './dance-video.component.html',
  styleUrls: ['./dance-video.component.scss'],
})
export class DanceVideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('psDanceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  url$!: Observable<SafeUrl>;

  constructor(private heroVideo: HeroVideoService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.danceVideo.nativeElement.muted = true;

    this.heroVideo.loadVideo(this.danceVideo.nativeElement);
  }

  ngOnDestroy(): void {
    this.heroVideo.destroy();
  }
}
