import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { ConnectPageModule } from 'src/app/pages/connect/connect-page.module';
import { ConnectPageService } from 'src/app/pages/connect/services/connect-page.service';

describe('ConnectPageService', () => {
  let service: ConnectPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ConnectPageModule],
    });
    service = TestBed.inject(ConnectPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
