import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAreasComponent } from './template-areas.component';

describe('TemplateAreasComponent', () => {
  let component: TemplateAreasComponent;
  let fixture: ComponentFixture<TemplateAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
