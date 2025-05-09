import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAllComponent } from './shop-all.component';

describe('ShopAllComponent', () => {
  let component: ShopAllComponent;
  let fixture: ComponentFixture<ShopAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
