import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { SidenavButtonComponent } from 'src/app/layout/sidenav/sidenav-button/sidenav-button.component';
import { SidenavDrawerComponent } from 'src/app/layout/sidenav/sidenav-drawer/sidenav-drawer.component';
import { sidenavImports } from 'src/app/layout/sidenav/sidenav.module';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...sidenavImports],
      declarations: [
        SidenavComponent,
        SidenavButtonComponent,
        SidenavDrawerComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
