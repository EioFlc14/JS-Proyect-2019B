import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaSearchUDMedicalCheckComponent } from './ruta-search-udmedical-check.component';

describe('RutaSearchUDMedicalCheckComponent', () => {
  let component: RutaSearchUDMedicalCheckComponent;
  let fixture: ComponentFixture<RutaSearchUDMedicalCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSearchUDMedicalCheckComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaSearchUDMedicalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
