import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasrutaComponent } from './asignaturasruta.component';

describe('AsignaturasrutaComponent', () => {
  let component: AsignaturasrutaComponent;
  let fixture: ComponentFixture<AsignaturasrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturasrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturasrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
