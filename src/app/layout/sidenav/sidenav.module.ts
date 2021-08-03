import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidenavButtonComponent } from './button/sidenav-button.component';
import { SidenavDrawerComponent } from './drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from './link/sidenav-link.component';
import { SidenavComponent } from './sidenav.component';

/**
 * NOTE (July 30, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sidenavImports = [
  CommonModule,
  RouterModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavButtonComponent,
    SidenavLinkComponent,
  ],
  imports: sidenavImports,
  exports: [SidenavComponent],
})
export class SidenavModule {}
