import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from 'src/app/state/features/router/router-store.module';
import { SidenavStoreModule } from 'src/app/state/features/sidenav/sidenav-store.module';
import { reducers } from 'src/app/state/reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    SidenavStoreModule,
    RouterStoreModule,
  ],
})
export class StateModule {}
