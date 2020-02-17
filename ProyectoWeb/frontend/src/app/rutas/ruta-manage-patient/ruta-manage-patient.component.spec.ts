import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaManagePatientComponent } from './ruta-manage-patient.component';

describe('RutaManagePatientComponent', () => {
  let component: RutaManagePatientComponent;
  let fixture: ComponentFixture<RutaManagePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaManagePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaManagePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
