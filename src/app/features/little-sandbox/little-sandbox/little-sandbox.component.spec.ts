import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleSandboxComponent } from './little-sandbox.component';

describe('LittleSandboxComponent', () => {
  let component: LittleSandboxComponent;
  let fixture: ComponentFixture<LittleSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
