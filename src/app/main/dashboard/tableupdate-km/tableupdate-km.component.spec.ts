import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableupdateKMComponent } from './tableupdate-km.component';

describe('TableupdateKMComponent', () => {
  let component: TableupdateKMComponent;
  let fixture: ComponentFixture<TableupdateKMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableupdateKMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableupdateKMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
