import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompLogin } from './comp-login';

describe('CompLogin', () => {
  let component: CompLogin;
  let fixture: ComponentFixture<CompLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(CompLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
