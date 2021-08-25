import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { ConnectHeroComponent } from 'src/app/pages/connect/components/hero/connect-hero.component';
import { ConnectPageModule } from 'src/app/pages/connect/connect-page.module';

describe('ConnectHeroComponent', () => {
  let component: ConnectHeroComponent;
  let fixture: ComponentFixture<ConnectHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ConnectPageModule],
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
