import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, Subject } from 'rxjs';
import {
  CodePageSections,
  CodePageSection,
} from '../../store/actions/code-page.actions';
import * as CodePageActions from 'src/app/pages/code/store/actions/code-page.actions';
import { Store } from '@ngrx/store';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'ps-code-content',
  templateUrl: './code-content.component.html',
  styleUrls: ['./code-content.component.scss'],
})
export class CodeContentComponent {
  codePageSections = CodePageSections;

  private destroyed$ = new Subject<void>();

  // constructor(private actions$: Actions) {
  //   this.actions$.pipe(
  //     ofType(CodePageActions.scrollToSection),
  //     map(() => true),
  //     take(1),
  //     startWith(false)
  //   );
  // }

  constructor(
    private store: Store,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onScrollToSection(section: CodePageSection) {
    this.viewportScroller.scrollToAnchor(section);
    // this.store.dispatch(
    //   CodePageActions.scrollToSection({
    //     section,
    //   })
    // );
  }
}
