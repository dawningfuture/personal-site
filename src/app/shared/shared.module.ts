import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationIndicatorComponent } from './navigation-indicator/navigation-indicator.component';
import { VersionComponent } from './version/version.component';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sharedImports = [MatProgressBarModule];

@NgModule({
  declarations: [VersionComponent, NavigationIndicatorComponent],
  imports: [CommonModule, ...sharedImports],
  exports: [VersionComponent, NavigationIndicatorComponent],
})
export class SharedModule {}
