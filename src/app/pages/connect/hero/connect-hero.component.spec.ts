import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { connectPageImports } from 'src/app/pages/connect/connect-page.module';
import { ConnectHeroComponent } from './connect-hero.component';

describe('ConnectHeroComponent', () => {
  let component: ConnectHeroComponent;
  let fixture: ComponentFixture<ConnectHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...connectPageImports],
      declarations: [ConnectHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
