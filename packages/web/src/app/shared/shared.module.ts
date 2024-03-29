import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContentContainerComponent } from 'src/app/shared/content-container/content-container.component';
import { ContentPanelComponent } from 'src/app/shared/content-panel/content-panel.component';
import { ContentComponent } from 'src/app/shared/content/content.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { NavigationIndicatorComponent } from 'src/app/shared/navigation-indicator/navigation-indicator.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    NavigationIndicatorComponent,
    LoadingIndicatorComponent,
    ContentContainerComponent,
    ContentPanelComponent,
    FooterComponent,
    ContentComponent,
    HeroComponent,
  ],
  imports: [CommonModule, MatProgressBarModule, FlexLayoutModule],
  exports: [
    NavigationIndicatorComponent,
    LoadingIndicatorComponent,
    HeroComponent,
    ContentComponent,
    ContentContainerComponent,
    ContentPanelComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
