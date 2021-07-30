import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavButtonComponent } from './sidenav-button/sidenav-button.component';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from './sidenav-link/sidenav-link.component';
import { SidenavComponent } from './sidenav.component';
import { SidenavEffects } from './state/effects/sidenav.effects';
import * as fromSidenav from './state/reducers/sidenav.reducer';

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
  imports: [
    ...sidenavImports,
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
