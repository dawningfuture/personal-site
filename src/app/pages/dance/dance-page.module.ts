import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DancePageRoutingModule } from 'src/app/pages/dance/dance-page-routing.module';
import { DancePageComponent } from './dance-page.component';

@NgModule({
  declarations: [DancePageComponent],
  imports: [CommonModule, DancePageRoutingModule],
})
export class DancePageModule {}
