import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchuddoctorPage } from './searchuddoctor.page';

describe('SearchuddoctorPage', () => {
  let component: SearchuddoctorPage;
  let fixture: ComponentFixture<SearchuddoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchuddoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchuddoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
