import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}
