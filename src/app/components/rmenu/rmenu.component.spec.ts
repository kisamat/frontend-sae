import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmenuComponent } from './rmenu.component';

describe('RmenuComponent', () => {
  let component: RmenuComponent;
  let fixture: ComponentFixture<RmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
