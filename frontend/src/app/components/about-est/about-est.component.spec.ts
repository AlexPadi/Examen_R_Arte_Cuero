import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEstComponent } from './about-est.component';

describe('AboutEstComponent', () => {
  let component: AboutEstComponent;
  let fixture: ComponentFixture<AboutEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
