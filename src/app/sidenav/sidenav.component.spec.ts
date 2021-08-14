import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { SidenavButtonComponent } from 'src/app/sidenav/components/button/sidenav-button.component';
import { SidenavDrawerComponent } from 'src/app/sidenav/components/drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from 'src/app/sidenav/components/link/sidenav-link.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { sidenavImports } from 'src/app/sidenav/sidenav.module';

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
        SidenavLinkComponent,
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
