import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchudmedicalcheckPage } from './searchudmedicalcheck.page';

describe('SearchudmedicalcheckPage', () => {
  let component: SearchudmedicalcheckPage;
  let fixture: ComponentFixture<SearchudmedicalcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchudmedicalcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchudmedicalcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
