import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliantdispoComponent } from './cliantdispo.component';

describe('CliantdispoComponent', () => {
  let component: CliantdispoComponent;
  let fixture: ComponentFixture<CliantdispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliantdispoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliantdispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
