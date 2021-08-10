import { TestBed } from '@angular/core/testing';

import { BackgroundVideoLoaderService } from './background-video-loader.service';

describe('BackgroundVideoLoaderService', () => {
  let service: BackgroundVideoLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundVideoLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
