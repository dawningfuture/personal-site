import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NativeVideoService {
  protected videoEl?: HTMLVideoElement;

  constructor() {}

  setVideo(el: HTMLVideoElement): void {
    this.videoEl = el;
  }

  loadSource(url: string): void {
    if (this.videoEl) {
      this.videoEl.src = url;
    }
  }

  destroy(): void {
    this.videoEl = undefined;
  }
}
