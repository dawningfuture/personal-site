import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { VersionComponent } from './version/version.component';

/**
 * NOTE (July 30, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sharedImports = [FlexLayoutModule, MatDividerModule];

@NgModule({
  declarations: [VersionComponent],
  imports: [CommonModule, ...sharedImports],
  exports: [VersionComponent],
})
export class SharedModule {}
