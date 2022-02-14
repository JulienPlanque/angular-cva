import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLevelComponent } from './three-level.component';

describe('ThreeLevelComponent', () => {
  let component: ThreeLevelComponent;
  let fixture: ComponentFixture<ThreeLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
