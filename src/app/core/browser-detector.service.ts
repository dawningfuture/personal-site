import { Injectable } from '@angular/core';
import * as Bowser from 'bowser';

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
