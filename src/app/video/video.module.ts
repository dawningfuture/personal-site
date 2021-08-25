import { NgModule } from '@angular/core';
import { HlsjsVideoService } from 'src/app/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/video/native-video.service';
import { VideoService } from 'src/app/video/video.service';

@NgModule({
  providers: [VideoService, HlsjsVideoService, NativeVideoService],
})
export class VideoModule {}
