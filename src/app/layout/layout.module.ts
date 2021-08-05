import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SidenavModule } from './sidenav/sidenav.module';

/**
 * NOTE (July 30, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const layoutImports = [SidenavModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, ...layoutImports],
  exports: [LayoutComponent],
})
export class LayoutModule {}
