import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MissionPageRoutingModule } from 'src/app/pages/mission/mission-page-routing.module';
import { MissionPageComponent } from './mission-page.component';

@NgModule({
  declarations: [MissionPageComponent],
  imports: [CommonModule, MissionPageRoutingModule],
})
export class MissionPageModule {}
