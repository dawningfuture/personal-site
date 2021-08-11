import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import {
  DanceVideoStatuses,
  DanceVideoStore,
} from 'src/app/pages/dance/video/dance-video.store';

@Component({
  selector: 'ps-dance-video',
  templateUrl: './dance-video.component.html',
  styleUrls: ['./dance-video.component.scss'],
  providers: [DanceVideoStore],
})
export class DanceVideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('psDanceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  private destroyed$ = new Subject<void>();

  constructor(
    private danceVideoStore: DanceVideoStore,
    private heroHlsjsVideo: HeroHlsjsVideoService
  ) {}

  ngOnInit(): void {
    this.danceVideoStore.play$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.danceVideo.nativeElement.play();
      });
  }

  ngAfterViewInit(): void {
    this.danceVideo.nativeElement.muted = true;

    this.heroHlsjsVideo.attachMedia(this.danceVideo.nativeElement);
  }

  ngOnDestroy(): void {
    this.heroHlsjsVideo.detachMedia();

    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onPlaying(): void {
    this.danceVideoStore.setStatus(DanceVideoStatuses.PLAYING);
  }

  onWaiting(): void {
    this.danceVideoStore.setStatus(DanceVideoStatuses.WAITING);
  }
}
