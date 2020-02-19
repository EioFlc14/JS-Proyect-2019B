import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionarCarritoComponent } from './ruta-gestionar-carrito.component';

describe('RutaGestionarCarritoComponent', () => {
  let component: RutaGestionarCarritoComponent;
  let fixture: ComponentFixture<RutaGestionarCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionarCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
