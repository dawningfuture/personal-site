import { TestBed } from '@angular/core/testing';
import { RecaptchaService } from 'src/app/core/recaptcha.service';

describe('RecaptchaService', () => {
  let service: RecaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
