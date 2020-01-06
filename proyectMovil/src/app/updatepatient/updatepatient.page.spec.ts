import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatepatientPage } from './updatepatient.page';

describe('UpdatepatientPage', () => {
  let component: UpdatepatientPage;
  let fixture: ComponentFixture<UpdatepatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatepatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
