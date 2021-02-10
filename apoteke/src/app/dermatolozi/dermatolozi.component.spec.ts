import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatoloziComponent } from './dermatolozi.component';

describe('DermatoloziComponent', () => {
  let component: DermatoloziComponent;
  let fixture: ComponentFixture<DermatoloziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatoloziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DermatoloziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
