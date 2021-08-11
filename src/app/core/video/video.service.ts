import { Injectable } from '@angular/core';
import { HlsjsVideoService } from 'src/app/core/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/core/video/native-video.service';
import { environment } from 'src/environments/environment';

export interface VideoConfig {
  native: {
    url: string;
  };
  hls: {
    url: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  protected config?: VideoConfig;

  constructor(
    protected hlsjsVideo: HlsjsVideoService,
    protected nativeVideo: NativeVideoService
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
    if (this.config) {
      if (this.useHlsjs()) {
        this.hlsjsVideo.loadSource(this.config.hls.url);
      } else {
        this.nativeVideo.loadSource(this.config.native.url);
      }
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
      !!this.config?.hls.url
    );
  }
}
