import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ConnectEmail {
  name: string;
  organization: string;
  email: string;
  message: string;
}

@Injectable()
export class ConnectPageService {
  constructor(private http: HttpClient) {}

  sendConnectEmail(email: ConnectEmail): Observable<any> {
    return this.http.post(environment.pages.connect.sendConnectEmailEndpoint, {
      email,
    });
  }
}
