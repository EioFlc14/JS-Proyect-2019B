import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionarUsuarioComponent } from './ruta-gestionar-usuario.component';

describe('RutaGestionarUsuarioComponent', () => {
  let component: RutaGestionarUsuarioComponent;
  let fixture: ComponentFixture<RutaGestionarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
