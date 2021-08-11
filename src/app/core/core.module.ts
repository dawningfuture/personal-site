import { NgModule } from '@angular/core';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import { PsLayoutGapStyleBuilder } from 'src/app/core/style-builders/layout-gap.style-builder';
import { VisibilityService } from 'src/app/core/visibility.service';

@NgModule({
  providers: [
    BrowserDetectorService,
    VisibilityService,
    {
      provide: LayoutGapStyleBuilder,
      useClass: PsLayoutGapStyleBuilder,
    },
  ],
})
export class CoreModule {}
