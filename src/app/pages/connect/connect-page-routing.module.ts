import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundResolverService } from 'src/app/core/resolvers/page-background-resolver.service';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectPageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}
