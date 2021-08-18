import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContentContainerComponent } from './content-container/content-container.component';
import { InitializationIndicatorComponent } from './initialization-indicator/initialization-indicator.component';
import { NavigationIndicatorComponent } from './navigation-indicator/navigation-indicator.component';
import { VersionComponent } from './version/version.component';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sharedImports = [MatProgressBarModule, FlexLayoutModule];

@NgModule({
  declarations: [
    VersionComponent,
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
  ],
  imports: [CommonModule, ...sharedImports],
  exports: [
    VersionComponent,
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
    ContentContainerComponent,
  ],
})
export class SharedModule {}
