import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundLoadResolverService } from 'src/app/core/resolvers/page-background-load-resolver.service';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';

const routes: Routes = [
  {
    path: '',
    component: DancePageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundLoadResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancePageRoutingModule {}
