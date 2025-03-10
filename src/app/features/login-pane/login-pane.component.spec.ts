import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaneComponent } from './login-pane.component';

describe('LoginPaneComponent', () => {
  let component: LoginPaneComponent;
  let fixture: ComponentFixture<LoginPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
