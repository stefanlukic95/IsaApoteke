import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaceutComponent } from './farmaceut.component';

describe('FarmaceutComponent', () => {
  let component: FarmaceutComponent;
  let fixture: ComponentFixture<FarmaceutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaceutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaceutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
