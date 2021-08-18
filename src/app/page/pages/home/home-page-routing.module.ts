import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { HomePageComponent } from 'src/app/page/pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      heroImageUrl: HeroImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
