import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';

const routes: Routes = [
  {
    path: '',
    component: CodePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
