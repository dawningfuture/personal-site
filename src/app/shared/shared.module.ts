import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InitializationIndicatorComponent } from 'src/app/shared/initialization-indicator/initialization-indicator.component';
import { NavigationIndicatorComponent } from 'src/app/shared/navigation-indicator/navigation-indicator.component';
import { VersionComponent } from 'src/app/shared/version/version.component';

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
  ],
  imports: [CommonModule, ...sharedImports],
  exports: [
    VersionComponent,
    NavigationIndicatorComponent,
    InitializationIndicatorComponent,
  ],
})
export class SharedModule {}
