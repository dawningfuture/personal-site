import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { CodePageComponent } from 'src/app/page/pages/code/code-page.component';

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
