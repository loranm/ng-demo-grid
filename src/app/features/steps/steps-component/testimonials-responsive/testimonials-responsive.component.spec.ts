import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsResponsiveComponent } from './testimonials-responsive.component';

describe('TestimonialsResponsiveComponent', () => {
  let component: TestimonialsResponsiveComponent;
  let fixture: ComponentFixture<TestimonialsResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
