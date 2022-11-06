import { TestBed } from '@angular/core/testing';

import { HighChartServiceService } from './high-chart-service.service';

describe('HighChartServiceService', () => {
  let service: HighChartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighChartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
