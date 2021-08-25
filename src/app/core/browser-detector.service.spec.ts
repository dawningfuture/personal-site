import { TestBed } from '@angular/core/testing';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';

describe('BrowserDetectorService', () => {
  let service: BrowserDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
