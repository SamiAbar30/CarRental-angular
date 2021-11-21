import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesvehiclesComponent } from './statistiquesvehicles.component';

describe('StatistiquesvehiclesComponent', () => {
  let component: StatistiquesvehiclesComponent;
  let fixture: ComponentFixture<StatistiquesvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesvehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
