import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContentContainerComponent } from './content-container/content-container.component';
import { InitializationIndicatorComponent } from './initialization-indicator/initialization-indicator.component';
import { NavigationIndicatorComponent } from './navigation-indicator/navigation-indicator.component';

@NgModule({
  declarations: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
  ],
  imports: [CommonModule, MatProgressBarModule, FlexLayoutModule],
  exports: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
  ],
})
export class SharedModule {}
