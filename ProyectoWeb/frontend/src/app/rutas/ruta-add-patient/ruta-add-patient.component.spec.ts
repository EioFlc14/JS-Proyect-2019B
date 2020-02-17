import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAddPatientComponent } from './ruta-add-patient.component';

describe('RutaAddPatientComponent', () => {
  let component: RutaAddPatientComponent;
  let fixture: ComponentFixture<RutaAddPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
