import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroVideoService } from 'src/app/hero/hero-video.service';
import { HeroModule } from 'src/app/hero/hero.module';

describe('HeroVideoService', () => {
  let service: HeroVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, HeroModule],
    });
    service = TestBed.inject(HeroVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
