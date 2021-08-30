import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  private recaptcha$ = new ReplaySubject<ReCaptchaV2.ReCaptcha>(1);

  constructor(private zone: NgZone) {
    this.loadScript();
  }

  render(
    container: HTMLElement,
    params: Required<
      Pick<
        ReCaptchaV2.Parameters,
        'callback' | 'error-callback' | 'expired-callback'
      >
    >
  ): void {
    this.recaptcha$.pipe(take(1)).subscribe((recaptcha) => {
      recaptcha.render(container, {
        callback: () => this.zone.run(params.callback),
        'expired-callback': () => this.zone.run(params['expired-callback']),
        'error-callback': () => this.zone.run(params['error-callback']),
        sitekey: environment.pages.connect.recaptchaSiteKey,
      });
    });
  }

  private loadScript(): void {
    (window as any).onRecaptchaLoadCallback = () => {
      this.recaptcha$.next(grecaptcha);
    };

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src =
      'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit';

    document.head.appendChild(script);
  }
}
