import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionarJugadorComponent } from './ruta-gestionar-jugador.component';

describe('RutaGestionarJugadorComponent', () => {
  let component: RutaGestionarJugadorComponent;
  let fixture: ComponentFixture<RutaGestionarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
