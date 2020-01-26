import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaUpdateMedicalCheckComponent } from './ruta-update-medical-check.component';

describe('RutaUpdateMedicalCheckComponent', () => {
  let component: RutaUpdateMedicalCheckComponent;
  let fixture: ComponentFixture<RutaUpdateMedicalCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUpdateMedicalCheckComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaUpdateMedicalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
