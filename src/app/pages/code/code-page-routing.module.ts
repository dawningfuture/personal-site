import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBackgroundImageResolverService } from 'src/app/core/hero-background-image-resolver/hero-background-image-resolver.service';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';

const routes: Routes = [
  {
    path: '',
    component: CodePageComponent,
    resolve: {
      heroBackgroundUrl: HeroBackgroundImageResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
