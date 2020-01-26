import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaUpdateDoctorComponent } from './ruta-update-doctor.component';

describe('RutaUpdateDoctorComponent', () => {
  let component: RutaUpdateDoctorComponent;
  let fixture: ComponentFixture<RutaUpdateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUpdateDoctorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaUpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
