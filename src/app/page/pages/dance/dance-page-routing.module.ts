import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroVideoGuard } from 'src/app/hero/hero-video.guard';
import { DancePageComponent } from 'src/app/page/pages/dance/dance-page.component';

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
