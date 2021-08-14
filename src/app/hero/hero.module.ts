import { NgModule } from '@angular/core';
import { VideoModule } from 'src/app/core/video/video.module';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { HeroNativeVideoService } from 'src/app/hero/hero-native-video.service';
import { HeroVideoGuard } from 'src/app/hero/hero-video.guard';
import { HeroVideoService } from 'src/app/hero/hero-video.service';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const heroImports = [VideoModule];

@NgModule({
  providers: [
    HeroImageResolverService,
    HeroVideoService,
    HeroVideoGuard,
    HeroHlsjsVideoService,
    HeroNativeVideoService,
  ],
  imports: heroImports,
})
export class HeroModule {}
