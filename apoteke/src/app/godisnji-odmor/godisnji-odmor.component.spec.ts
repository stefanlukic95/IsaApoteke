import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodisnjiOdmorComponent } from './godisnji-odmor.component';

describe('GodisnjiOdmorComponent', () => {
  let component: GodisnjiOdmorComponent;
  let fixture: ComponentFixture<GodisnjiOdmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodisnjiOdmorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodisnjiOdmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
