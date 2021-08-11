import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { PsLayoutGapStyleBuilder } from 'src/app/core/style-builders/layout-gap.style-builder';
import { HlsjsVideoService } from 'src/app/core/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/core/video/native-video.service';
import { VideoService } from 'src/app/core/video/video.service';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const coreImports = [HttpClientModule];

@NgModule({
  providers: [
    VideoService,
    HlsjsVideoService,
    NativeVideoService,
    {
      provide: LayoutGapStyleBuilder,
      useClass: PsLayoutGapStyleBuilder,
    },
  ],
  imports: [...coreImports],
})
export class CoreModule {}
