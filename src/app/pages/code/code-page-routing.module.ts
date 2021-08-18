import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';
import { HeroImageResolverService } from 'src/app/pages/hero/hero-image-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CodePageComponent,
    resolve: {
      heroImageUrl: HeroImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
