import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAddEquipoComponent } from './ruta-add-equipo.component';

describe('RutaAddEquipoComponent', () => {
  let component: RutaAddEquipoComponent;
  let fixture: ComponentFixture<RutaAddEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAddEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
