import { NgModule } from '@angular/core';
import { HlsjsVideoService } from 'src/app/core/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/core/video/native-video.service';
import { VideoService } from 'src/app/core/video/video.service';

@NgModule({
  providers: [VideoService, HlsjsVideoService, NativeVideoService],
})
export class VideoModule {}
