import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaneComponent } from './cart-pane.component';

describe('CartPaneComponent', () => {
  let component: CartPaneComponent;
  let fixture: ComponentFixture<CartPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
