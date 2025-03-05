import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDistritosComponent } from './mostrar-distritos.component';

describe('MostrarDistritosComponent', () => {
  let component: MostrarDistritosComponent;
  let fixture: ComponentFixture<MostrarDistritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarDistritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDistritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
