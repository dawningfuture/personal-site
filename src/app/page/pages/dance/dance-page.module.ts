import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroModule } from 'src/app/hero/hero.module';
import { DancePageRoutingModule } from 'src/app/page/pages/dance/dance-page-routing.module';
import { DancePageComponent } from 'src/app/page/pages/dance/dance-page.component';
import { DanceHeroComponent } from 'src/app/page/pages/dance/hero/dance-hero.component';
import { DanceVideoComponent } from 'src/app/page/pages/dance/video/dance-video.component';

@NgModule({
  declarations: [DancePageComponent, DanceHeroComponent, DanceVideoComponent],
  imports: [CommonModule, DancePageRoutingModule, FlexLayoutModule, HeroModule],
})
export class DancePageModule {}
