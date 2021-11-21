import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituredispoComponent } from './voituredispo.component';

describe('VoituredispoComponent', () => {
  let component: VoituredispoComponent;
  let fixture: ComponentFixture<VoituredispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoituredispoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoituredispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
