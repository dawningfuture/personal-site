import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroModule } from 'src/app/hero/hero.module';
import { ConnectPageRoutingModule } from 'src/app/pages/connect/connect-page-routing.module';
import { ConnectPageComponent } from './connect-page.component';
import { ConnectHeroComponent } from './hero/connect-hero.component';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const connectPageImports = [FlexLayoutModule, HeroModule];

@NgModule({
  declarations: [ConnectPageComponent, ConnectHeroComponent],
  imports: [CommonModule, ConnectPageRoutingModule, ...connectPageImports],
})
export class ConnectPageModule {}
