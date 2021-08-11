import { Injectable } from '@angular/core';
import * as Bowser from 'bowser';

export enum BrowserNames {
  IOS = 'ios',
}

@Injectable({
  providedIn: 'root',
})
export class BrowserDetectorService {
  static browsers = Bowser.BROWSER_MAP;
  static platforms = Bowser.PLATFORMS_MAP;

  private parser = Bowser.getParser(window.navigator.userAgent);

  constructor() {}

  isBrowserName(browserName: BrowserNames): boolean {
    return this.parser.getBrowserName(true) === browserName;
  }
}
