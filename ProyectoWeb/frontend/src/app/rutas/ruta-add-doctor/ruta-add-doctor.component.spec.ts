import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAddDoctorComponent } from './ruta-add-doctor.component';

describe('RutaAddDoctorComponent', () => {
  let component: RutaAddDoctorComponent;
  let fixture: ComponentFixture<RutaAddDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
