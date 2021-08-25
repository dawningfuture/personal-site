import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

export interface LetsConnectEmail {
  name: string;
  organization: string;
  email: string;
  message: string;
}

@Injectable()
export class ConnectService {
  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  sendLetsConnectEmail(email: LetsConnectEmail): void {
    this.http
      .post(environment.pages.connect.sendLetsConnectEmailEndpoint, email)
      .subscribe((response) => console.log(response));
  }
}
