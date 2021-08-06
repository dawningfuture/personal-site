import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundLoadResolverService } from 'src/app/core/resolvers/page-background-load-resolver.service';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundLoadResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
