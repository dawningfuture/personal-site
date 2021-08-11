import { Injectable } from '@angular/core';
import Hls from 'hls.js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HlsjsVideoService {
  static isSupported = Hls.isSupported();

  protected hls: Hls;

  constructor() {
    this.hls = new Hls({
      debug: !environment.production,
    });
  }

  setVideo(videoEl: HTMLVideoElement): void {
    this.hls.attachMedia(videoEl);
  }

  loadSource(url: string): void {
    this.hls.loadSource(url);
  }

  destroy(): void {
    this.hls.destroy();
  }
}
