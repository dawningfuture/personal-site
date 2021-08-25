import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroModule } from 'src/app/hero/hero.module';
import { MissionHeroComponent } from 'src/app/pages/mission/hero/mission-hero.component';
import { MissionPageRoutingModule } from 'src/app/pages/mission/mission-page-routing.module';
import { MissionPageComponent } from 'src/app/pages/mission/mission-page.component';

@NgModule({
  declarations: [MissionPageComponent, MissionHeroComponent],
  imports: [
    CommonModule,
    MissionPageRoutingModule,
    FlexLayoutModule,
    HeroModule,
  ],
})
export class MissionPageModule {}
