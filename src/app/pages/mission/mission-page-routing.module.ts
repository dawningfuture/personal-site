import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundLoadResolverService } from 'src/app/core/resolvers/page-background-load-resolver.service';
import { MissionPageComponent } from 'src/app/pages/mission/mission-page.component';

const routes: Routes = [
  {
    path: '',
    component: MissionPageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundLoadResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionPageRoutingModule {}
