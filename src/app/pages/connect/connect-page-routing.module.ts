import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';
import { HeroImageResolverService } from 'src/app/pages/hero/hero-image-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ConnectPageComponent,
    resolve: {
      heroImageUrl: HeroImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}
