import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterEffects } from './state/effects/router.effects';
import { reducers } from './state/reducers';

export const appImports = [
  BrowserAnimationsModule,
  AppRoutingModule,
  StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictActionTypeUniqueness: true,
    },
  }),
  EffectsModule.forRoot([RouterEffects]),
  StoreRouterConnectingModule.forRoot(),
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    ...appImports,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
