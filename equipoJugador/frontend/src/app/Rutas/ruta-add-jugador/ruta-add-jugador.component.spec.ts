import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAddJugadorComponent } from './ruta-add-jugador.component';

describe('RutaAddJugadorComponent', () => {
  let component: RutaAddJugadorComponent;
  let fixture: ComponentFixture<RutaAddJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAddJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
