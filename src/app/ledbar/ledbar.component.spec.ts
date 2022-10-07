import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedbarComponent } from './ledbar.component';

describe('LedbarComponent', () => {
  let component: LedbarComponent;
  let fixture: ComponentFixture<LedbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
