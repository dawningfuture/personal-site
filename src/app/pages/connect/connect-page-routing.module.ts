import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundLoadResolverService } from 'src/app/core/resolvers/page-background-load-resolver.service';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectPageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundLoadResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}
