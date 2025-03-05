import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEstablecimientosComponent } from './mostrar-establecimientos.component';

describe('MostrarEstablecimientosComponent', () => {
  let component: MostrarEstablecimientosComponent;
  let fixture: ComponentFixture<MostrarEstablecimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarEstablecimientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarEstablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
