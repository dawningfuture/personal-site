import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { ConnectPageComponent } from 'src/app/page/pages/connect/connect-page.component';

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
