import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavModule } from 'src/app/sidenav/sidenav.module';
import { StateModule } from 'src/app/state/state.module';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const appImports = [
  BrowserAnimationsModule,
  AppRoutingModule,
  CoreModule,
  StateModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...appImports, SidenavModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
