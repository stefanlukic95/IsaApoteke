import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavComponentComponent } from './nav-component.component';

describe('NavComponentComponent', () => {
  let component: NavComponentComponent;
  let fixture: ComponentFixture<NavComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
