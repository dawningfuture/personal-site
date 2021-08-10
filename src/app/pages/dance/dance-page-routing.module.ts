import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundVideoLoaderService } from 'src/app/core/background-video-loader/background-video-loader.service';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';

const routes: Routes = [
  {
    path: '',
    component: DancePageComponent,
    canActivate: [BackgroundVideoLoaderService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancePageRoutingModule {}
