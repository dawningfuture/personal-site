import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { HeroNativeVideoService } from 'src/app/hero/hero-native-video.service';
import { HeroVideoGuard } from 'src/app/hero/hero-video.guard';
import { HeroVideoService } from 'src/app/hero/hero-video.service';
import { VideoModule } from 'src/app/video/video.module';

@NgModule({
  providers: [
    HeroImageResolverService,
    HeroVideoService,
    HeroVideoGuard,
    HeroHlsjsVideoService,
    HeroNativeVideoService,
  ],
  imports: [VideoModule, HttpClientModule, MatSnackBarModule],
})
export class HeroModule {}
