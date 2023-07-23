import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CodePageEffects } from 'src/app/pages/code/store/effects/code-page.effects';

@NgModule({
  imports: [EffectsModule.forFeature([CodePageEffects])],
})
export class CodePageStoreModule {}
