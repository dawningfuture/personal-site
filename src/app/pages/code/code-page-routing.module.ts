import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolver } from 'src/app/core/resolvers/hero-image.resolver';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';

const routes: Routes = [
  {
    path: '',
    component: CodePageComponent,
    resolve: {
      heroImageUrl: HeroImageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
