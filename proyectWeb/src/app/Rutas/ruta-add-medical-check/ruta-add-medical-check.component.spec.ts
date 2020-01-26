import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaAddMedicalCheckComponent } from './ruta-add-medical-check.component';

describe('RutaAddMedicalCheckComponent', () => {
  let component: RutaAddMedicalCheckComponent;
  let fixture: ComponentFixture<RutaAddMedicalCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddMedicalCheckComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaAddMedicalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
