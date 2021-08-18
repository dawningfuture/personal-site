import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { SidenavModule } from 'src/app/sidenav/sidenav.module';
import { SidenavButtonComponent } from './sidenav-button.component';

describe('SidenavButtonComponent', () => {
  let component: SidenavButtonComponent;
  let fixture: ComponentFixture<SidenavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, SidenavModule],
      declarations: [SidenavButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
