import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCatComponent } from './gestion_cat.component';

describe('GestionCatComponent', () => {
  let component: GestionCatComponent;
  let fixture: ComponentFixture<GestionCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
