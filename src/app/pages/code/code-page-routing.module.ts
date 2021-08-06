import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundLoadResolverService } from 'src/app/core/resolvers/page-background-load-resolver.service';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';

const routes: Routes = [
  {
    path: '',
    component: CodePageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundLoadResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
