import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DancePageRoutingModule } from 'src/app/pages/dance/dance-page-routing.module';
import { DanceHeroComponent } from 'src/app/pages/dance/hero/dance-hero.component';
import { DancePageComponent } from './dance-page.component';
import { DanceVideoComponent } from './video/dance-video.component';

export const dancePageImports = [FlexLayoutModule];
@NgModule({
  declarations: [DancePageComponent, DanceHeroComponent, DanceVideoComponent],
  imports: [CommonModule, DancePageRoutingModule, ...dancePageImports],
})
export class DancePageModule {}
