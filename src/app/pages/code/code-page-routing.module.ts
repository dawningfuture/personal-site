import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBackgroundResolverService } from 'src/app/core/resolvers/page-background-resolver.service';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';

const routes: Routes = [
  {
    path: '',
    component: CodePageComponent,
    resolve: {
      heroBackgroundUrl: PageBackgroundResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
