import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBlocksComponent } from './move-blocks.component';

describe('MoveBlocksComponent', () => {
  let component: MoveBlocksComponent;
  let fixture: ComponentFixture<MoveBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
