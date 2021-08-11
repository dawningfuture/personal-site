import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as Visibility from 'visibilityjs';

@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  private hidden = new Subject<void>();
  readonly hidden$ = this.hidden.asObservable();

  private visibile = new Subject<void>();
  readonly visibile$ = this.visibile.asObservable();

  constructor() {
    Visibility.change((event, state) => {
      if (state === 'hidden') {
        this.hidden.next();
      }

      if (state === 'visible') {
        this.visibile.next();
      }
    });
  }
}
