import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KorisnikComponent } from './korisnik.component';

describe('KorisnikComponent', () => {
  let component: KorisnikComponent;
  let fixture: ComponentFixture<KorisnikComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
