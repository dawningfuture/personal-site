import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroModule } from 'src/app/hero/hero.module';
import { MissionContentComponent } from 'src/app/pages/mission/components/content/mission-content.component';
import { MissionHeroComponent } from 'src/app/pages/mission/components/hero/mission-hero.component';
import { MissionPageRoutingModule } from 'src/app/pages/mission/mission-page-routing.module';
import { MissionPageComponent } from 'src/app/pages/mission/mission-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MissionPageComponent,
    MissionHeroComponent,
    MissionContentComponent,
  ],
  imports: [
    CommonModule,
    MissionPageRoutingModule,
    FlexLayoutModule,
    HeroModule,
    SharedModule,
  ],
})
export class MissionPageModule {}
