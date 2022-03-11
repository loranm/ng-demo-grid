import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingBlocksComponent } from './sizing-blocks.component';

describe('SizingBlocksComponent', () => {
  let component: SizingBlocksComponent;
  let fixture: ComponentFixture<SizingBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizingBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
