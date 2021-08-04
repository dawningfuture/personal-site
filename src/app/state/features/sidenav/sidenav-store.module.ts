import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SidenavEffects } from 'src/app/state/features/sidenav/effects/sidenav.effects';
import * as fromSidenav from 'src/app/state/features/sidenav/reducers/sidenav.reducer';

/**
 * NOTE (July 30, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const sidenavStoreImports = [RouterModule];

@NgModule({
  imports: [
    ...sidenavStoreImports,
    StoreModule.forFeature(fromSidenav.featureKey, fromSidenav.reducer),
    EffectsModule.forFeature([SidenavEffects]),
  ],
})
export class SidenavStoreModule {}
