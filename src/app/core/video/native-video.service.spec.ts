import { TestBed } from '@angular/core/testing';
import { NativeVideoService } from './native-video.service';

describe('NativeVideoService', () => {
  let service: NativeVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeVideoService],
    });
    service = TestBed.inject(NativeVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
