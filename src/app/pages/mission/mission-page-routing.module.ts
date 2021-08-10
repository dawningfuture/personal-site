import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBackgroundImageResolverService } from 'src/app/core/hero-background-image-resolver/hero-background-image-resolver.service';
import { MissionPageComponent } from 'src/app/pages/mission/mission-page.component';

const routes: Routes = [
  {
    path: '',
    component: MissionPageComponent,
    resolve: {
      heroBackgroundUrl: HeroBackgroundImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionPageRoutingModule {}
