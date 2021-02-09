import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApotekaEditComponent } from './apoteka-edit.component';

describe('ApotekaEditComponent', () => {
  let component: ApotekaEditComponent;
  let fixture: ComponentFixture<ApotekaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApotekaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApotekaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
