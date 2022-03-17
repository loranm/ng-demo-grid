import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioComponent } from './cardio.component';

describe('CarioComponent', () => {
  let component: CardioComponent;
  let fixture: ComponentFixture<CardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
