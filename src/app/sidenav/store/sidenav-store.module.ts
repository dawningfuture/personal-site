import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavEffects } from 'src/app/sidenav/store/effects/sidenav.effects';
import * as fromSidenav from 'src/app/sidenav/store/reducers/sidenav.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
    RouterModule,
  ],
})
export class SidenavStoreModule {}
