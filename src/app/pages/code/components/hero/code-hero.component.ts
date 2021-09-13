import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ps-code-hero',
  templateUrl: './code-hero.component.html',
  styleUrls: ['./code-hero.component.scss'],
})
export class CodeHeroComponent implements OnInit {
  imageUrl$!: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imageUrl$ = this.route.data.pipe(map((data) => data.heroImageUrl));
  }
}
