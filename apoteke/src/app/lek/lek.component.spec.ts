import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LekComponent } from './lek.component';

describe('LekComponent', () => {
  let component: LekComponent;
  let fixture: ComponentFixture<LekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
