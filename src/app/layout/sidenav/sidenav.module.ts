import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavButtonComponent } from './sidenav-button/sidenav-button.component';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavComponent } from './sidenav.component';
import { SidenavEffects } from './state/effects/sidenav.effects';
import * as fromSidenav from './state/reducers/sidenav.reducer';

export const sidenavImports = [
  CommonModule,
  RouterModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
];
@NgModule({
  declarations: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavButtonComponent,
  ],
  imports: [
    ...sidenavImports,
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
  ],
  exports: [SidenavComponent, SidenavButtonComponent],
})
export class SidenavModule {}
