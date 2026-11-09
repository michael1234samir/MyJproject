import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Saint } from './saint';

describe('Saint', () => {
  let component: Saint;
  let fixture: ComponentFixture<Saint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saint],
    }).compileComponents();

    fixture = TestBed.createComponent(Saint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
