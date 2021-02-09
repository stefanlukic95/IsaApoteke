import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LekRezervacijaComponent } from './lek-rezervacija.component';

describe('LekRezervacijaComponent', () => {
  let component: LekRezervacijaComponent;
  let fixture: ComponentFixture<LekRezervacijaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LekRezervacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekRezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
