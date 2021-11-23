import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptecliantComponent } from './comptecliant.component';

describe('ComptecliantComponent', () => {
  let component: ComptecliantComponent;
  let fixture: ComponentFixture<ComptecliantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptecliantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptecliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
