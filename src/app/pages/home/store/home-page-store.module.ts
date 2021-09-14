import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HomePageEffects } from 'src/app/pages/home/store/effects/home-page.effects';

@NgModule({
  imports: [EffectsModule.forFeature([HomePageEffects])],
})
export class HomePageStoreModule {}
