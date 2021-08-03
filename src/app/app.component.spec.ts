import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, LayoutModule],
      declarations: [AppComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
