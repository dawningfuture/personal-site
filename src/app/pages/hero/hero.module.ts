import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroHlsjsVideoService } from 'src/app/pages/hero/hero-hlsjs-video.service';
import { HeroImageResolverService } from 'src/app/pages/hero/hero-image-resolver.service';
import { HeroNativeVideoService } from 'src/app/pages/hero/hero-native-video.service';
import { HeroVideoGuard } from 'src/app/pages/hero/hero-video.guard';
import { HeroVideoService } from 'src/app/pages/hero/hero-video.service';
import { VideoModule } from 'src/app/video/video.module';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const heroImports = [MatSnackBarModule, HttpClientModule, VideoModule];

@NgModule({
  providers: [
    HeroImageResolverService,
    HeroVideoService,
    HeroVideoGuard,
    HeroHlsjsVideoService,
    HeroNativeVideoService,
  ],
  imports: [CommonModule, ...heroImports],
})
export class HeroModule {}
