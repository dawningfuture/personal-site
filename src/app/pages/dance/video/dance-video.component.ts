import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
  danceVideoUrl$!: Observable<string>;

  @ViewChild('psDanceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  private destroyed$ = new Subject<void>();

  constructor(
    private danceVideoStore: DanceVideoStore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.danceVideoUrl$ = this.route.data.pipe(
      map((data) => data.heroBackgroundUrl)
    );

    this.danceVideoStore.play$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.danceVideo.nativeElement.play();
      });
  }

  ngAfterViewInit(): void {
    this.danceVideo.nativeElement.muted = true;
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
