import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBienvenidaComponent } from './menu-bienvenida.component';

describe('MenuBienvenidaComponent', () => {
  let component: MenuBienvenidaComponent;
  let fixture: ComponentFixture<MenuBienvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBienvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
