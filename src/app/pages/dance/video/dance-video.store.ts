import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter } from 'rxjs/operators';

export enum DanceVideoStatuses {
  WAITING = 'waiting',
  PAUSED = 'paused',
  PLAYING = 'playing',
}

interface DanceVideoState {
  status: DanceVideoStatuses;
}

@Injectable()
export class DanceVideoStore extends ComponentStore<DanceVideoState> {
  constructor() {
    super({
      status: DanceVideoStatuses.WAITING,
    });
  }

  setStatus = this.updater((state, value: DanceVideoStatuses) => ({
    ...state,
    status: value,
  }));

  play$ = this.select(this.state$, (state) => state.status, {
    debounce: true,
  }).pipe(filter((status) => status === DanceVideoStatuses.PAUSED));
}
