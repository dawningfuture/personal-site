import { NgModule } from '@angular/core';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import { RecaptchaService } from 'src/app/core/recaptcha.service';
import { PsLayoutGapStyleBuilder } from 'src/app/core/style-builders/layout-gap.style-builder';
import { VisibilityService } from 'src/app/core/visibility.service';

@NgModule({
  providers: [
    BrowserDetectorService,
    VisibilityService,
    RecaptchaService,
    {
      provide: LayoutGapStyleBuilder,
      useClass: PsLayoutGapStyleBuilder,
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
      },
    },
  ],
})
export class CoreModule {}
