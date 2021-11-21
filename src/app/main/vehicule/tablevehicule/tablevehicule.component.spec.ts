import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablevehiculeComponent } from './tablevehicule.component';

describe('TablevehiculeComponent', () => {
  let component: TablevehiculeComponent;
  let fixture: ComponentFixture<TablevehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablevehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
