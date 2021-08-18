import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { SidenavModule } from 'src/app/sidenav/sidenav.module';
import { SidenavDrawerComponent } from './sidenav-drawer.component';

describe('SidenavDrawerComponent', () => {
  let component: SidenavDrawerComponent;
  let fixture: ComponentFixture<SidenavDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, SidenavModule],
      declarations: [SidenavDrawerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
