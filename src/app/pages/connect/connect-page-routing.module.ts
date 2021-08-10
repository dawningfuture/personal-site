import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBackgroundImageResolverService } from 'src/app/core/hero-background-image-resolver/hero-background-image-resolver.service';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectPageComponent,
    resolve: {
      heroBackgroundUrl: HeroBackgroundImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}
