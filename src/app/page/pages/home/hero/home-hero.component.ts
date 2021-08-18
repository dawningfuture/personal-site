import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ps-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit {
  imageUrl$!: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imageUrl$ = this.route.data.pipe(map((data) => data.heroImageUrl));
  }
}
