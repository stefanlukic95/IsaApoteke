import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcijaEditComponent } from './akcija-edit.component';

describe('AkcijaEditComponent', () => {
  let component: AkcijaEditComponent;
  let fixture: ComponentFixture<AkcijaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkcijaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkcijaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
