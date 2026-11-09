import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicComps } from './public-comps';

describe('PublicComps', () => {
  let component: PublicComps;
  let fixture: ComponentFixture<PublicComps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicComps],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicComps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
