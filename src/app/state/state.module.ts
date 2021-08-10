import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from 'src/app/state/features/router/router-store.module';
import { SidenavStoreModule } from 'src/app/state/features/sidenav/sidenav-store.module';
import { reducers } from 'src/app/state/reducers';
import { environment } from 'src/environments/environment';

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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class StateModule {}
