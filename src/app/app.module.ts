import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from 'src/app/shared/shared.module';
import { StateModule } from 'src/app/state/state.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

/**
 * NOTE (July 31, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const appImports = [
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule,
  StateModule,
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
