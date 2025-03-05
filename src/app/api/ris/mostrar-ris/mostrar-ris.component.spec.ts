import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRisComponent } from './mostrar-ris.component';

describe('MostrarRisComponent', () => {
  let component: MostrarRisComponent;
  let fixture: ComponentFixture<MostrarRisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarRisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarRisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
