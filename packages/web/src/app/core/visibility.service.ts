import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import * as Visibility from 'visibilityjs';

// NOTE: I got the keys for the visibility states for `visibilityjs` here:
// https://github.com/ai/visibilityjs#states

export enum VisibilityStates {
  HIDDEN = 'hidden',
  VISIBLE = 'visible',
}
@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  // NOTE: When I use services for messaging, I make the underlying `Subject`
  // private, and make its emissions accessible using a different public variable
  // and the `asObservable()` method. This ensures that consumers of the service
  // can't override the visbility detection done by `visibilityjs` from outside the service.

  private visibilityChange = new Subject<VisibilityStates>();
  readonly visibilityChange$ = this.visibilityChange.asObservable();

  constructor(private zone: NgZone) {
    Visibility.change((_, state) =>
      this.zone.run(() => this.visibilityChange.next(state as VisibilityStates))
    );
  }
}
