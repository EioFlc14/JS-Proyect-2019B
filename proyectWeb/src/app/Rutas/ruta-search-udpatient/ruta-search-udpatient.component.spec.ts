import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaSearchUDPatientComponent } from './ruta-search-udpatient.component';

describe('RutaSearchUDPatientComponent', () => {
  let component: RutaSearchUDPatientComponent;
  let fixture: ComponentFixture<RutaSearchUDPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSearchUDPatientComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaSearchUDPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
