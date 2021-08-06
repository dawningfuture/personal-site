import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { RouterEffects } from 'src/app/state/features/router/effects/router.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([RouterEffects]),
  ],
})
export class RouterStoreModule {}
