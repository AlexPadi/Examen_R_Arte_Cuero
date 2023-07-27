import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComComponent } from './gestion-com.component';

describe('GestionComComponent', () => {
  let component: GestionComComponent;
  let fixture: ComponentFixture<GestionComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
