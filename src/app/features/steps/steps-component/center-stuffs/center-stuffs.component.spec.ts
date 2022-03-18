import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterStuffsComponent } from './center-stuffs.component';

describe('CenterStuffsComponent', () => {
  let component: CenterStuffsComponent;
  let fixture: ComponentFixture<CenterStuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterStuffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterStuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
