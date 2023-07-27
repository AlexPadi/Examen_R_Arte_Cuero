import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestion_formComponent } from './gestion_form.component';

describe('Gestion_formComponent', () => {
  let component: Gestion_formComponent;
  let fixture: ComponentFixture<Gestion_formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gestion_formComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestion_formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
