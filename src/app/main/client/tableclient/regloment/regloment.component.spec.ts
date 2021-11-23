import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglomentComponent } from './regloment.component';

describe('ReglomentComponent', () => {
  let component: ReglomentComponent;
  let fixture: ComponentFixture<ReglomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
