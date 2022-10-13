import { TestBed } from '@angular/core/testing';

import { ConfigInterceptorService } from './config-interceptor.service';

describe('ConfigInterceptorService', () => {
  let service: ConfigInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
