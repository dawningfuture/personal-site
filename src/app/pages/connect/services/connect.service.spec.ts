import { TestBed } from '@angular/core/testing';
import { ConnectPageModule } from 'src/app/pages/connect/connect-page.module';
import { ConnectService } from './connect.service';

describe('ConnectService', () => {
  let service: ConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConnectPageModule],
    });
    service = TestBed.inject(ConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
