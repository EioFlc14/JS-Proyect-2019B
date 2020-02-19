import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarJugadorComponent } from './ruta-actualizar-jugador.component';

describe('RutaActualizarJugadorComponent', () => {
  let component: RutaActualizarJugadorComponent;
  let fixture: ComponentFixture<RutaActualizarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
