import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavButtonComponent } from 'src/app/sidenav/components/button/sidenav-button.component';
import { SidenavDrawerComponent } from 'src/app/sidenav/components/drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from 'src/app/sidenav/components/link/sidenav-link.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { SidenavStoreModule } from 'src/app/sidenav/store/sidenav-store.module';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sidenavImports = [
  CommonModule,
  SidenavStoreModule,
  RouterModule,
  SharedModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavButtonComponent,
    SidenavLinkComponent,
  ],
  imports: [...sidenavImports],
  exports: [SidenavComponent],
})
export class SidenavModule {}
