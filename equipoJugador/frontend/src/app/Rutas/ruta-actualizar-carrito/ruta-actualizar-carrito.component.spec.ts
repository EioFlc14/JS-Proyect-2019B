import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarCarritoComponent } from './ruta-actualizar-carrito.component';

describe('RutaActualizarCarritoComponent', () => {
  let component: RutaActualizarCarritoComponent;
  let fixture: ComponentFixture<RutaActualizarCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
