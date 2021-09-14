import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterEffects } from 'src/app/state/effects/router.effects';
import { reducers } from 'src/app/state/reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
})
export class StateModule {}
