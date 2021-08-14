import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavEffects } from 'src/app/sidenav/store/effects/sidenav.effects';
import * as fromSidenav from 'src/app/sidenav/store/reducers/sidenav.reducer';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sidenavStoreImports = [RouterModule];

@NgModule({
  imports: [
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
    ...sidenavStoreImports,
  ],
})
export class SidenavStoreModule {}
