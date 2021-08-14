import { Injectable } from '@angular/core';
import {
  LayoutGapParent,
  LayoutGapStyleBuilder,
  StyleDefinition,
  StyleUtils,
} from '@angular/flex-layout';

@Injectable({
  providedIn: 'root',
})
export class PsLayoutGapStyleBuilder extends LayoutGapStyleBuilder {
  constructor(styler: StyleUtils) {
    super(styler);
  }

  sideEffect(
    gapValue: string,
    styles: StyleDefinition,
    parent: LayoutGapParent
  ): void {
    // NOTE: This value should be the same as the `$ps-padding` style variable
    const defaultLayoutGap = '15px';

    super.sideEffect(gapValue || defaultLayoutGap, styles, parent);
  }
}
