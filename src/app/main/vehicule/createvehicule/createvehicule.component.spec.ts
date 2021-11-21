import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevehiculeComponent } from './createvehicule.component';

describe('CreatevehiculeComponent', () => {
  let component: CreatevehiculeComponent;
  let fixture: ComponentFixture<CreatevehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
