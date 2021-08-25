import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import * as ConnectPageActions from 'src/app/pages/connect/store/actions/connect-page.actions';
import { environment } from 'src/environments/environment';

enum ConnectFormControls {
  NAME = 'name',
  ORGANIZATION = 'organization',
  EMAIL = 'email',
  MESSAGE = 'message',
  RECAPTCHA_SUCCESS = 'recaptchaSuccessful',
}

enum ConnectFormPlaceholders {
  NAME = 'Your name',
  ORGANIZATION = 'Your organization',
  EMAIL = 'Your email',
  MESSAGE = 'Your message',
}

enum ConnectFormErrorMessages {
  NAME_REQUIRED = 'I need to know who you are',
  EMAIL_REQUIRED = 'I need to know how to connect with you',
  EMAIL_INVALID = `That doesn't seem like an email address`,
  MESSAGE_REQUIRED = 'What would you like to say?',
}

export interface ConnectFormValue {
  [ConnectFormControls.NAME]: string;
  [ConnectFormControls.ORGANIZATION]: string;
  [ConnectFormControls.EMAIL]: string;
  [ConnectFormControls.MESSAGE]: string;
}

@Component({
  selector: 'ps-connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.scss'],
  animations: [
    trigger('container', [state('*', style({ overflow: 'hidden' }))]),
    trigger('slideFadeIn', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)',
          overflow: 'hidden',
          opacity: '0',
        }),
        animate(
          '1000ms ease-out',
          style({ transform: 'translateY(0%)', opacity: '1' })
        ),
      ]),
    ]),
    trigger('slideFadeOut', [
      transition(':leave', [
        style({
          height: '*',
          opacity: '1',
          overflow: 'hidden',
        }),
        animate(
          '1000ms ease-out',
          style({
            transform: 'translateY(-100%)',
            height: '0px',
            opacity: '0',
          })
        ),
      ]),
    ]),
  ],
})
export class ConnectFormComponent implements AfterViewInit, OnDestroy {
  form: FormGroup;
  @ViewChild(FormGroupDirective) formGroup!: FormGroupDirective;

  controls = ConnectFormControls;
  placeholders = ConnectFormPlaceholders;
  errorMessages = ConnectFormErrorMessages;

  private grecaptcha: any = (window as any).grecaptcha;
  @ViewChild('captcha') captcha!: ElementRef<HTMLDivElement>;

  submitted$: Observable<boolean>;

  private destroyed$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private actions$: Actions
  ) {
    this.form = this.formBuilder.group({
      [ConnectFormControls.NAME]: this.formBuilder.control('', [
        Validators.required,
      ]),
      [ConnectFormControls.ORGANIZATION]: this.formBuilder.control(''),
      [ConnectFormControls.EMAIL]: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      [ConnectFormControls.MESSAGE]: this.formBuilder.control('', [
        Validators.required,
      ]),
      [ConnectFormControls.RECAPTCHA_SUCCESS]: this.formBuilder.control(false, [
        Validators.requiredTrue,
      ]),
    });

    this.submitted$ = this.actions$.pipe(
      ofType(ConnectPageActions.sendConnectEmailSuccess),
      map(() => true),
      startWith(false)
    );

    this.actions$
      .pipe(
        ofType(ConnectPageActions.sendConnectEmailSuccess),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.reset());
  }

  ngAfterViewInit(): void {
    if (this.grecaptcha) {
      this.grecaptcha.render(this.captcha.nativeElement, {
        sitekey: environment.pages.connect.recaptchaSiteKey,
        callback: this.onCaptchaSuccessCallback.bind(this),
        'expired-callback': this.onCaptchaExpiredCallback.bind(this),
        'error-callback': this.onCaptchaErrorCallback.bind(this),
      });
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSubmit(): void {
    const value: ConnectFormValue = {
      [ConnectFormControls.NAME]: this.form.get(ConnectFormControls.NAME)
        ?.value,
      [ConnectFormControls.ORGANIZATION]: this.form.get(
        ConnectFormControls.ORGANIZATION
      )?.value,
      [ConnectFormControls.EMAIL]: this.form.get(ConnectFormControls.EMAIL)
        ?.value,
      [ConnectFormControls.MESSAGE]: this.form.get(ConnectFormControls.MESSAGE)
        ?.value,
    };

    this.store.dispatch(
      ConnectPageActions.submittedForm({
        value,
      })
    );
  }

  private onCaptchaSuccessCallback(): void {
    this.form.get(ConnectFormControls.RECAPTCHA_SUCCESS)?.setValue(true);
  }

  private onCaptchaExpiredCallback(): void {
    this.form.get(ConnectFormControls.RECAPTCHA_SUCCESS)?.setValue(false);
  }

  private onCaptchaErrorCallback(): void {
    this.form.get(ConnectFormControls.RECAPTCHA_SUCCESS)?.setValue(false);
  }

  private reset(): void {
    this.formGroup.resetForm();
    this.grecaptcha.reset();
  }
}
