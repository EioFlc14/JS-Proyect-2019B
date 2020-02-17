import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaManageDoctorComponent } from './ruta-manage-doctor.component';

describe('RutaManageDoctorComponent', () => {
  let component: RutaManageDoctorComponent;
  let fixture: ComponentFixture<RutaManageDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaManageDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaManageDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
