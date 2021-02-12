import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodisnjiOdmorEditComponent } from './godisnji-odmor-edit.component';

describe('GodisnjiOdmorEditComponent', () => {
  let component: GodisnjiOdmorEditComponent;
  let fixture: ComponentFixture<GodisnjiOdmorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodisnjiOdmorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodisnjiOdmorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
