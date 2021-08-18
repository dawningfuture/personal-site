import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { heroImports } from 'src/app/hero/hero.module';
import { HeroHlsjsVideoService } from './hero-hlsjs-video.service';

describe('HeroHlsjsVideoService', () => {
  let service: HeroHlsjsVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...heroImports],
      providers: [HeroHlsjsVideoService],
    });
    service = TestBed.inject(HeroHlsjsVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
