import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVComponent } from './tableV.component';

describe('TableVComponent', () => {
  let component: TableVComponent;
  let fixture: ComponentFixture<TableVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
