import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUpdatePatientComponent } from './ruta-update-patient.component';

describe('RutaUpdatePatientComponent', () => {
  let component: RutaUpdatePatientComponent;
  let fixture: ComponentFixture<RutaUpdatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUpdatePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
