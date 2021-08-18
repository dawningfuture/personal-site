import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavVersionComponent } from './sidenav-version.component';

describe('SidenavVersionComponent', () => {
  let component: SidenavVersionComponent;
  let fixture: ComponentFixture<SidenavVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavVersionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
