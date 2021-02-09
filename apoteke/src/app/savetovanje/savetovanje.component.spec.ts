import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SavetovanjeComponent } from './savetovanje.component';

describe('SavetovanjeComponent', () => {
  let component: SavetovanjeComponent;
  let fixture: ComponentFixture<SavetovanjeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SavetovanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
