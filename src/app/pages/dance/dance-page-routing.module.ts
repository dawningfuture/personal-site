import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundResolverService } from 'src/app/core/resolvers/page-background-resolver.service';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';

const routes: Routes = [
  {
    path: '',
    component: DancePageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancePageRoutingModule {}
