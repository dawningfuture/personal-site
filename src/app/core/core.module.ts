import { NgModule } from '@angular/core';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import { PsLayoutGapStyleBuilder } from 'src/app/core/style-builders/layout-gap.style-builder';

@NgModule({
  providers: [
    BrowserDetectorService,
    {
      provide: LayoutGapStyleBuilder,
      useClass: PsLayoutGapStyleBuilder,
    },
  ],
})
export class CoreModule {}
