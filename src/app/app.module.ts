import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { SidenavModule } from 'src/app/sidenav/sidenav.module';
import { StateModule } from 'src/app/state/state.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * NOTE (July 31, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const appImports = [
  BrowserAnimationsModule,
  AppRoutingModule,
  CoreModule,
  StateModule,
  SidenavModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...appImports],
  bootstrap: [AppComponent],
})
export class AppModule {}
