import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { MissionPageComponent } from 'src/app/pages/mission/mission-page.component';

const routes: Routes = [
  {
    path: '',
    component: MissionPageComponent,
    resolve: {
      heroImageUrl: HeroImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionPageRoutingModule {}
