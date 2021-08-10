import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBackgroundImageResolverService } from 'src/app/core/hero-background-image-resolver/hero-background-image-resolver.service';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      heroBackgroundUrl: HeroBackgroundImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
