import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatemedicalcheckPage } from './updatemedicalcheck.page';

describe('UpdatemedicalcheckPage', () => {
  let component: UpdatemedicalcheckPage;
  let fixture: ComponentFixture<UpdatemedicalcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemedicalcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatemedicalcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
