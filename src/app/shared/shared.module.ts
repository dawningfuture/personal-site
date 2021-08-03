import { NgModule } from '@angular/core';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { PsLayoutGapStyleBuilder } from 'src/app/shared/style-builders/layout-gap.style-builder';

@NgModule({
  providers: [
    {
      provide: LayoutGapStyleBuilder,
      useClass: PsLayoutGapStyleBuilder,
    },
  ],
})
export class SharedModule {}
