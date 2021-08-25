import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InitializationIndicatorComponent } from 'src/app/shared/initialization-indicator/initialization-indicator.component';
import { NavigationIndicatorComponent } from 'src/app/shared/navigation-indicator/navigation-indicator.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';

@NgModule({
  declarations: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
    ContentPanelComponent,
  ],
  imports: [CommonModule, MatProgressBarModule, FlexLayoutModule],
  exports: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
    ContentPanelComponent,
  ],
})
export class SharedModule {}
