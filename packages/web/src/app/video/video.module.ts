import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroVideoGuard } from 'src/app/video/guards/hero-video.guard';
import { HlsjsVideoService } from 'src/app/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/video/native-video.service';
import { videoServiceProvider } from 'src/app/video/video.service';

@NgModule({
  imports: [MatSnackBarModule],
  providers: [
    videoServiceProvider,
    HlsjsVideoService,
    NativeVideoService,
    HeroVideoGuard,
  ],
})
export class VideoModule {}
