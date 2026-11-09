import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comps } from './comps';

describe('Comps', () => {
  let component: Comps;
  let fixture: ComponentFixture<Comps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comps],
    }).compileComponents();

    fixture = TestBed.createComponent(Comps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
