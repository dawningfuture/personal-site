import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ps-mission-hero',
  templateUrl: './mission-hero.component.html',
  styleUrls: ['./mission-hero.component.scss'],
})
export class MissionHeroComponent implements OnInit {
  imageUrl$!: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imageUrl$ = this.route.data.pipe(map((data) => data.heroImageUrl));
  }
}
