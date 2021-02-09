import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApotekaComponent } from './apoteka.component';

describe('ApotekaComponent', () => {
  let component: ApotekaComponent;
  let fixture: ComponentFixture<ApotekaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApotekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApotekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
