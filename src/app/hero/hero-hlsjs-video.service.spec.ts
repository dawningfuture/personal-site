import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { heroImports } from 'src/app/hero/hero.module';

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
