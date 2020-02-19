import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAddCarritoComponent } from './ruta-add-carrito.component';

describe('RutaAddCarritoComponent', () => {
  let component: RutaAddCarritoComponent;
  let fixture: ComponentFixture<RutaAddCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAddCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
