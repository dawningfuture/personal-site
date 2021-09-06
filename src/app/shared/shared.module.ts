import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContentContainerComponent } from 'src/app/shared/content-container/content-container.component';
import { ContentPanelComponent } from 'src/app/shared/content-panel/content-panel.component';
import { InitializationIndicatorComponent } from 'src/app/shared/initialization-indicator/initialization-indicator.component';
import { NavigationIndicatorComponent } from 'src/app/shared/navigation-indicator/navigation-indicator.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
    ContentPanelComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MatProgressBarModule, FlexLayoutModule],
  exports: [
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
    ContentPanelComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
