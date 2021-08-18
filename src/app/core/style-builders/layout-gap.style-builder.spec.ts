import { TestBed } from '@angular/core/testing';
import { PsLayoutGapStyleBuilder } from 'src/app/core/style-builders/layout-gap.style-builder';

describe('PsLayoutGapStyleBuilder', () => {
  let service: PsLayoutGapStyleBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsLayoutGapStyleBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
