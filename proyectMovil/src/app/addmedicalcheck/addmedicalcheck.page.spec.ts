import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmedicalcheckPage } from './addmedicalcheck.page';

describe('AddmedicalcheckPage', () => {
  let component: AddmedicalcheckPage;
  let fixture: ComponentFixture<AddmedicalcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedicalcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmedicalcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
