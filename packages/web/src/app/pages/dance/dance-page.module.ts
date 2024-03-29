import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DanceContentComponent } from 'src/app/pages/dance/components/content/dance-content.component';
import { DanceHeroComponent } from 'src/app/pages/dance/components/hero/dance-hero.component';
import { DanceVideoComponent } from 'src/app/pages/dance/components/video/dance-video.component';
import { DancePageRoutingModule } from 'src/app/pages/dance/dance-page-routing.module';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideoModule } from 'src/app/video/video.module';

@NgModule({
  declarations: [
    DancePageComponent,
    DanceHeroComponent,
    DanceVideoComponent,
    DanceContentComponent,
  ],
  imports: [
    CommonModule,
    DancePageRoutingModule,
    FlexLayoutModule,
    SharedModule,
    VideoModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class DancePageModule {}
