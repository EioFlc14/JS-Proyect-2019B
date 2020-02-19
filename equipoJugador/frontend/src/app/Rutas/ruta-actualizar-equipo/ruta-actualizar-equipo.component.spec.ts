import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarEquipoComponent } from './ruta-actualizar-equipo.component';

describe('RutaActualizarEquipoComponent', () => {
  let component: RutaActualizarEquipoComponent;
  let fixture: ComponentFixture<RutaActualizarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
