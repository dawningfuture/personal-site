import { trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { animateChildrenOnLeave } from 'src/app/animations/utility.animations';
import { VideoService } from 'src/app/video/video.service';

@Component({
  selector: 'ps-dance-video',
  templateUrl: './dance-video.component.html',
  styleUrls: ['./dance-video.component.scss'],
  animations: [trigger('autoplayed', [animateChildrenOnLeave()])],
})
export class DanceVideoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('danceVideo') danceVideo!: ElementRef<HTMLVideoElement>;

  autoplayed$?: Observable<boolean>;

  constructor(private video: VideoService) {}

  ngAfterViewInit(): void {
    this.autoplayed$ = this.video
      .autoplay(this.danceVideo.nativeElement)
      .pipe(map(() => true));
  }

  ngOnDestroy(): void {
    this.video.destroy();
  }
}
