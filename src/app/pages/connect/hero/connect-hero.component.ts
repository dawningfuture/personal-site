import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ps-connect-hero',
  templateUrl: './connect-hero.component.html',
  styleUrls: ['./connect-hero.component.scss'],
})
export class ConnectHeroComponent implements OnInit {
  backgroundImageUrl$!: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.backgroundImageUrl$ = this.route.data.pipe(
      map((data) => data.heroBackgroundUrl)
    );
  }
}
