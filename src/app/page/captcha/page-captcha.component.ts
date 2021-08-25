import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ps-page-captcha',
  templateUrl: './page-captcha.component.html',
  styleUrls: ['./page-captcha.component.scss'],
})
export class PageCaptchaComponent implements OnInit {
  grecaptcha: any = (window as any).grecaptcha;

  @Output() verificationSuccess = new EventEmitter<void>();
  @Output() verificationFailure = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    if (this.grecaptcha) {
      this.grecaptcha.render('grecaptcha', {
        sitekey: '6LcUARIcAAAAAGM-W8K6BJsOpd4jJjamAVEo4ltI',
        callback: this.onGrecaptchaCallback.bind(this),
        'expired-callback': this.onExpiredCallback.bind(this),
        'error-callback': this.onErrorCallback.bind(this),
      });
    }
  }

  private onGrecaptchaCallback(): void {
    this.verificationSuccess.next();
  }

  private onExpiredCallback(): void {
    this.verificationFailure.next();
  }

  private onErrorCallback(): void {
    this.verificationFailure.next();
  }
}
