import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class DanceVideoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('psDanceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  private destroyed$ = new Subject<void>();

  constructor(private danceVideoStore: DanceVideoStore) {}

  ngAfterViewInit(): void {
    this.danceVideo.nativeElement.muted = true;

    this.danceVideoStore.play$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.danceVideo.nativeElement.play();
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onCanPlay(): void {
    this.danceVideoStore.setStatus(DanceVideoStatuses.PAUSED);
  }

  onPlaying(): void {
    this.danceVideoStore.setStatus(DanceVideoStatuses.PLAYING);
  }

  onWaiting(): void {
    this.danceVideoStore.setStatus(DanceVideoStatuses.WAITING);
  }
}
