import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';
import { HeroVideoGuard } from 'src/app/video/guards/hero-video.guard';

const routes: Routes = [
  {
    path: '',
    component: DancePageComponent,
    canActivate: [HeroVideoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancePageRoutingModule {}
