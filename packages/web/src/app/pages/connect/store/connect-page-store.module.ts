import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { ConnectPageEffects } from 'src/app/pages/connect/store/effects/connect-page.effects';

@NgModule({
  imports: [EffectsModule.forFeature([ConnectPageEffects]), MatSnackBarModule],
})
export class ConnectPageStoreModule {}
