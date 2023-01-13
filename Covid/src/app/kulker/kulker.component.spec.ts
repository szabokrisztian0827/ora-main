import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KulkerComponent } from './kulker.component';

describe('KulkerComponent', () => {
  let component: KulkerComponent;
  let fixture: ComponentFixture<KulkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KulkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KulkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
