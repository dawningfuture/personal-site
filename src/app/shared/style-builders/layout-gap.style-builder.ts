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
    console.log('works');
    super.sideEffect(gapValue || '15px', styles, parent);
  }
}
