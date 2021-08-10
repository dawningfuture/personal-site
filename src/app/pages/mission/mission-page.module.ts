import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MissionPageRoutingModule } from 'src/app/pages/mission/mission-page-routing.module';
import { MissionHeroComponent } from './hero/mission-hero.component';
import { MissionPageComponent } from './mission-page.component';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const missionPageImports = [FlexLayoutModule];

@NgModule({
  declarations: [MissionPageComponent, MissionHeroComponent],
  imports: [CommonModule, MissionPageRoutingModule, ...missionPageImports],
})
export class MissionPageModule {}
