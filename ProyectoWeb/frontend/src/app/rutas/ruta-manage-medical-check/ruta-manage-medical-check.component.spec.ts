import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaManageMedicalCheckComponent } from './ruta-manage-medical-check.component';

describe('RutaManageMedicalCheckComponent', () => {
  let component: RutaManageMedicalCheckComponent;
  let fixture: ComponentFixture<RutaManageMedicalCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaManageMedicalCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaManageMedicalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
