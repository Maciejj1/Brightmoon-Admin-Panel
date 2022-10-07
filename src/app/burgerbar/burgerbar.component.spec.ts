import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerbarComponent } from './burgerbar.component';

describe('BurgerbarComponent', () => {
  let component: BurgerbarComponent;
  let fixture: ComponentFixture<BurgerbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
