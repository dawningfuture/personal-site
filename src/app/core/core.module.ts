import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PsLayoutGapStyleBuilder } from 'src/app/core/style-builders/layout-gap.style-builder';

export const coreImports = [HttpClientModule, MatSnackBarModule];

@NgModule({
  providers: [
    {
      provide: LayoutGapStyleBuilder,
      useClass: PsLayoutGapStyleBuilder,
    },
  ],
  imports: [...coreImports],
})
export class CoreModule {}
