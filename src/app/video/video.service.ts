import { Injectable } from '@angular/core';
import {
  BrowserDetectorService,
  BrowserNames,
  PlatformTypes,
} from 'src/app/core/browser-detector.service';
import { HlsjsVideoService } from 'src/app/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/video/native-video.service';
import { environment } from 'src/environments/environment';

export interface VideoConfig {
  source: {
    mp4Url: string;
    hlsTsUrl: string;
    hlsFmp4Url: string;
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

  loadSource(): void {
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
      !!this.config?.source.hlsTsUrl
    );
  }

  protected getSourceUrl(): string {
    if (this.useHlsjs()) {
      return this.config?.source.hlsTsUrl || '';
    }

    if (
      this.browserDetector.isBrowserName(BrowserNames.SAFARI) &&
      this.browserDetector.isPlatformType(PlatformTypes.MOBILE)
    ) {
      return this.config?.source.hlsFmp4Url || '';
    }

    return this.config?.source.mp4Url || '';
  }
}
