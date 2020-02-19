import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionarEquipoComponent } from './ruta-gestionar-equipo.component';

describe('RutaGestionarEquipoComponent', () => {
  let component: RutaGestionarEquipoComponent;
  let fixture: ComponentFixture<RutaGestionarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
