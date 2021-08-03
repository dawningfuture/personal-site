import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavEffects } from 'src/app/state/features/sidenav/effects/sidenav.effects';
import * as fromSidenav from 'src/app/state/features/sidenav/reducers/sidenav.reducer';

export const sidenavStoreImports = [RouterModule];

@NgModule({
  imports: [
    ...sidenavStoreImports,
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
  ],
})
export class SidenavStoreModule {}
