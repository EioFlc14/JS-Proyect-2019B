import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUpdateDoctorComponent } from './ruta-update-doctor.component';

describe('RutaUpdateDoctorComponent', () => {
  let component: RutaUpdateDoctorComponent;
  let fixture: ComponentFixture<RutaUpdateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUpdateDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
