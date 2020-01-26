import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaUpdatePatientComponent } from './ruta-update-patient.component';

describe('RutaUpdatePatientComponent', () => {
  let component: RutaUpdatePatientComponent;
  let fixture: ComponentFixture<RutaUpdatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUpdatePatientComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaUpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
