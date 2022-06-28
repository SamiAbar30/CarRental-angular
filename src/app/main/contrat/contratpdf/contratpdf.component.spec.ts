import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratpdfComponent } from './contratpdf.component';

describe('ContratpdfComponent', () => {
  let component: ContratpdfComponent;
  let fixture: ComponentFixture<ContratpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratpdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
