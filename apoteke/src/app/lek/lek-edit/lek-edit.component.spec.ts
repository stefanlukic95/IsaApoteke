import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LekEditComponent } from './lek-edit.component';

describe('LekEditComponent', () => {
  let component: LekEditComponent;
  let fixture: ComponentFixture<LekEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LekEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
