import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { ConnectPageModule } from 'src/app/pages/connect/connect-page.module';
import { ConnectPageEffects } from 'src/app/pages/connect/store/effects/connect-page.effects';

describe('ConnectPageEffects', () => {
  let actions$: Observable<any>;
  let effects: ConnectPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ConnectPageModule],
      providers: [ConnectPageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ConnectPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
