import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneToggleComponent } from './done-toggle.component';

describe('DoneToggleComponent', () => {
  let component: DoneToggleComponent;
  let fixture: ComponentFixture<DoneToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
