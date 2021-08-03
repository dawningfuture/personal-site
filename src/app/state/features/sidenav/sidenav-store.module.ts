import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavEffects } from 'src/app/state/features/sidenav/effects/sidenav.effects';
import * as fromSidenav from 'src/app/state/features/sidenav/reducers/sidenav.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
  ],
})
export class SidenavStoreModule {}
