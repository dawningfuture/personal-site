import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  private recaptcha$ = new ReplaySubject<ReCaptchaV2.ReCaptcha>(1);

  constructor() {
    this.loadScript();
  }

  render(
    container: string | HTMLElement,
    params?: ReCaptchaV2.Parameters
  ): void {
    this.recaptcha$.pipe(take(1)).subscribe((recaptcha) => {
      recaptcha.render(container, {
        ...params,
        sitekey: environment.pages.connect.recaptchaSiteKey,
      });
    });
  }

  reset(): void {
    this.recaptcha$.pipe(take(1)).subscribe((recaptcha) => {
      recaptcha.reset();
    });
  }

  private loadScript(): void {
    (window as any).onRecaptchaLoadCallback = () => {
      this.recaptcha$.next(window.grecaptcha);
    };

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src =
      'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit';

    document.head.appendChild(script);
  }
}
