import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchudpatientPage } from './searchudpatient.page';

describe('SearchudpatientPage', () => {
  let component: SearchudpatientPage;
  let fixture: ComponentFixture<SearchudpatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchudpatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchudpatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
