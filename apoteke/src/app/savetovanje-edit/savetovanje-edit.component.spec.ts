import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetovanjeEditComponent } from './savetovanje-edit.component';

describe('SavetovanjeEditComponent', () => {
  let component: SavetovanjeEditComponent;
  let fixture: ComponentFixture<SavetovanjeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavetovanjeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetovanjeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
