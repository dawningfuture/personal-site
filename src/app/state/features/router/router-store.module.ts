import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from 'src/app/state/features/router/effects/router.effects';

@NgModule({
  imports: [EffectsModule.forFeature([RouterEffects])],
})
export class RouterStoreModule {}
