import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ConnectService,
  LetsConnectEmail,
} from 'src/app/pages/connect/services/connect.service';

enum ConnectFormControls {
  NAME = 'name',
  ORGANIZATION = 'organization',
  EMAIL = 'email',
  MESSAGE = 'message',
  RECAPTCHA_SUCCESSFUL = 'recaptchaSuccessful',
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

@Component({
  selector: 'ps-connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.scss'],
})
export class ConnectFormComponent implements OnInit {
  form: FormGroup;

  controls = ConnectFormControls;
  placeholders = ConnectFormPlaceholders;
  errorMessages = ConnectFormErrorMessages;

  constructor(
    private formBuilder: FormBuilder,
    private connect: ConnectService
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
      [ConnectFormControls.RECAPTCHA_SUCCESSFUL]: this.formBuilder.control(
        false,
        [Validators.requiredTrue]
      ),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const email: LetsConnectEmail = {
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

    this.connect.sendLetsConnectEmail(email);
  }

  onCaptchaSuccess(): void {
    this.form.get(ConnectFormControls.RECAPTCHA_SUCCESSFUL)?.setValue(true);
  }

  onCaptchaFailure(): void {
    this.form.get(ConnectFormControls.RECAPTCHA_SUCCESSFUL)?.setValue(false);
  }
}
