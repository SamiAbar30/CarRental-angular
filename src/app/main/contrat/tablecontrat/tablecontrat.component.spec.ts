import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecontratComponent } from './tablecontrat.component';

describe('TablecontratComponent', () => {
  let component: TablecontratComponent;
  let fixture: ComponentFixture<TablecontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
