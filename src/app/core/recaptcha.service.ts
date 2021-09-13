import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// NOTE: This service loads the RECAPTCHA library and stores the global
// Object API that it creates. This ensures that Angular has loaded, and can
// communicate with the RECAPTCHA API from within the zone that was created for it
// by `zone.js`. This allows Angular bindings to update in response to the provided
// callback functions being called by the RECAPTCHA API

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  // NOTE: I used a `ReplaySubject` here so that a value isn't emitted until
  // the RECAPTCHA has loaded

  private recaptcha$ = new ReplaySubject<ReCaptchaV2.ReCaptcha>(1);

  constructor(private zone: NgZone) {
    this.loadScript();
  }

  // NOTE: I used the `Required` and `Pick` TypeScript utility types
  // to limit the `params` type to the values I needed

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
