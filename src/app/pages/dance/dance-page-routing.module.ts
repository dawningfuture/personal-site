import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBackgroundVideoLoaderService } from 'src/app/core/hero-background-video-loader/hero-background-video-loader.service';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';

const routes: Routes = [
  {
    path: '',
    component: DancePageComponent,
    canActivate: [HeroBackgroundVideoLoaderService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancePageRoutingModule {}
