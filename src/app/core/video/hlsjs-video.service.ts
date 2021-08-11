import { Injectable } from '@angular/core';
import Hls from 'hls.js';

@Injectable({
  providedIn: 'root',
})
export class HlsjsVideoService {
  protected hls;

  constructor() {
    this.hls = new Hls();
  }

  attachMedia(media: HTMLVideoElement): void {
    this.hls.attachMedia(media);
  }

  detachMedia(): void {
    this.hls.detachMedia();
  }
}
