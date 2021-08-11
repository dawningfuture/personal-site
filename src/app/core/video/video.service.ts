import { Injectable } from '@angular/core';
import {
  BrowserDetectorService,
  BrowserNames,
} from 'src/app/core/browser-detector.service';
import { HlsjsVideoService } from 'src/app/core/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/core/video/native-video.service';
import { environment } from 'src/environments/environment';

export interface VideoConfig {
  source: {
    mp4Url: string;
    hlsUrl: string;
  };
}

@Injectable()
export class VideoService {
  protected config?: VideoConfig;

  constructor(
    protected hlsjsVideo: HlsjsVideoService,
    protected nativeVideo: NativeVideoService,
    protected browserDetector: BrowserDetectorService
  ) {}

  init(config: VideoConfig): void {
    this.config = config;
  }

  setVideo(el: HTMLVideoElement): void {
    if (this.useHlsjs()) {
      this.hlsjsVideo.setVideo(el);
    } else {
      this.nativeVideo.setVideo(el);
    }
  }

  loadSource() {
    const sourceUrl = this.getSourceUrl();

    if (this.useHlsjs()) {
      this.hlsjsVideo.loadSource(sourceUrl);
    } else {
      this.nativeVideo.loadSource(sourceUrl);
    }
  }

  destroy(): void {
    if (this.useHlsjs()) {
      this.hlsjsVideo.destroy();
    } else {
      this.nativeVideo.destroy();
    }
  }

  protected useHlsjs(): boolean {
    return (
      HlsjsVideoService.isSupported &&
      environment.useHlsjs &&
      !!this.config?.source.hlsUrl
    );
  }

  protected getSourceUrl(): string {
    if (this.useHlsjs()) {
      return this.config?.source.hlsUrl || '';
    }

    if (this.browserDetector.isBrowserName(BrowserNames.IOS)) {
      return this.config?.source.hlsUrl || '';
    }

    return this.config?.source.mp4Url || '';
  }
}
