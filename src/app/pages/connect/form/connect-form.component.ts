import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

enum ConnectFormControls {
  NAME = 'name',
  ORGANIZATION = 'organization',
  EMAIL = 'email',
  MESSAGE = 'message',
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

  constructor(private formBuilder: FormBuilder) {
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
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('submit');
  }
}
