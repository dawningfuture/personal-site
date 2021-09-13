import { Injectable } from '@angular/core';
import * as Bowser from 'bowser';

// NOTE: The typings for `bowser` don't expose the possible browser names
// the `getBrowserName()` method returns, so I found the key used for
// Safari here:
// https://github.com/lancedikson/bowser/blob/f09411489ced05811c91cc6670a8e4ca9cbe39a7/src/constants.js#L72
//
// I did the same for the `getPlatformType()` method, and used the key for mobile here:
// https://github.com/lancedikson/bowser/blob/f09411489ced05811c91cc6670a8e4ca9cbe39a7/src/constants.js#L88

export enum BrowserNames {
  SAFARI = 'Safari',
}

export enum PlatformTypes {
  MOBILE = 'mobile',
}

@Injectable({
  providedIn: 'root',
})
export class BrowserDetectorService {
  private parser = Bowser.getParser(window.navigator.userAgent);

  isBrowserName(browserName: BrowserNames): boolean {
    return this.parser.getBrowserName() === browserName;
  }

  isPlatformType(platformType: PlatformTypes): boolean {
    return this.parser.getPlatformType() === platformType;
  }
}
