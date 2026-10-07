import { TestBed } from '@angular/core/testing';
import { JeServiceTs } from './je-service.ts';

describe('JeServiceTs', () => {
  let service: JeServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
