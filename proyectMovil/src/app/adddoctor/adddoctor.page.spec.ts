import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdddoctorPage } from './adddoctor.page';

describe('AdddoctorPage', () => {
  let component: AdddoctorPage;
  let fixture: ComponentFixture<AdddoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdddoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
