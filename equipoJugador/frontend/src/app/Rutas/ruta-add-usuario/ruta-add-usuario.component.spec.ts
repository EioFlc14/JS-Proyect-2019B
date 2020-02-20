import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAddUsuarioComponent } from './ruta-add-usuario.component';

describe('RutaAddUsuarioComponent', () => {
  let component: RutaAddUsuarioComponent;
  let fixture: ComponentFixture<RutaAddUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAddUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAddUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
