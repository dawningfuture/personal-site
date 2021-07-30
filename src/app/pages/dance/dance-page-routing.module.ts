import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';

const routes: Routes = [
  {
    path: '',
    component: DancePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancePageRoutingModule {}
