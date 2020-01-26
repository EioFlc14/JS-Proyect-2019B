import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutaSearchUDDoctorComponent } from './ruta-search-uddoctor.component';

describe('RutaSearchUDDoctorComponent', () => {
  let component: RutaSearchUDDoctorComponent;
  let fixture: ComponentFixture<RutaSearchUDDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSearchUDDoctorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutaSearchUDDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
