import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RezervacijaComponent } from './rezervacija.component';

describe('RezervacijaComponent', () => {
  let component: RezervacijaComponent;
  let fixture: ComponentFixture<RezervacijaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
