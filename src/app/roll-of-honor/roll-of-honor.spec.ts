import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RollOfHonor } from './roll-of-honor';

describe('RollOfHonor', () => {
  let component: RollOfHonor;
  let fixture: ComponentFixture<RollOfHonor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollOfHonor],
    }).compileComponents();

    fixture = TestBed.createComponent(RollOfHonor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
