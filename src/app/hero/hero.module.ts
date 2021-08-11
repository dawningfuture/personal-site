import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { HeroVideoGuard } from 'src/app/hero/hero-video.guard';
import { HeroVideoService } from 'src/app/hero/hero-video.service';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const heroImports = [MatSnackBarModule];

@NgModule({
  providers: [
    HeroImageResolverService,
    HeroVideoService,
    HeroVideoGuard,
    HeroHlsjsVideoService,
  ],
  imports: [CommonModule, ...heroImports],
})
export class HeroModule {}
