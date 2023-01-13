import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazdasagComponent } from './gazdasag.component';

describe('GazdasagComponent', () => {
  let component: GazdasagComponent;
  let fixture: ComponentFixture<GazdasagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GazdasagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GazdasagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
