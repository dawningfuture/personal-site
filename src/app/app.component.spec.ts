import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { appImports } from 'src/app/app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports],
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
