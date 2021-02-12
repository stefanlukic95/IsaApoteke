import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarudzbenicaEditComponent } from './narudzbenica-edit.component';

describe('NarudzbenicaEditComponent', () => {
  let component: NarudzbenicaEditComponent;
  let fixture: ComponentFixture<NarudzbenicaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarudzbenicaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarudzbenicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
