import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as HomePageActions from 'src/app/pages/home/store/actions/home-page.actions';

@Component({
  selector: 'ps-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatRipple) ripple!: MatRipple;

  imageUrl$!: Observable<string>;

  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private actions$: Actions) {}

  ngOnInit(): void {
    this.imageUrl$ = this.route.data.pipe(
      map((data) => data.heroImageUrl),
      takeUntil(this.destroyed$)
    );
  }

  ngAfterViewInit(): void {
    this.actions$
      .pipe(ofType(HomePageActions.rippleCtaButton), takeUntil(this.destroyed$))
      .subscribe(() =>
        this.ripple.launch({
          centered: true,
        })
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
