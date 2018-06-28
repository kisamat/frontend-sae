import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasusuariosComponent } from './asignaturasusuarios.component';

describe('AsignaturasusuariosComponent', () => {
  let component: AsignaturasusuariosComponent;
  let fixture: ComponentFixture<AsignaturasusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturasusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturasusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
