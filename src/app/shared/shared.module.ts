import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InitializationIndicatorComponent } from 'src/app/shared/initialization-indicator/initialization-indicator.component';
import { NavigationIndicatorComponent } from 'src/app/shared/navigation-indicator/navigation-indicator.component';

@NgModule({
  declarations: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
  ],
  imports: [CommonModule, MatProgressBarModule, FlexLayoutModule],
  exports: [NavigationIndicatorComponent, InitializationIndicatorComponent],
})
export class SharedModule {}
