import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConnectPageRoutingModule } from 'src/app/pages/connect/connect-page-routing.module';
import { ConnectPageComponent } from './connect-page.component';
import { ConnectHeroComponent } from './hero/connect-hero.component';

export const connectPageImports = [FlexLayoutModule];

@NgModule({
  declarations: [ConnectPageComponent, ConnectHeroComponent],
  imports: [CommonModule, ConnectPageRoutingModule, ...connectPageImports],
})
export class ConnectPageModule {}
