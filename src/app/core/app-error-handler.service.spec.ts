import { TestBed, inject } from '@angular/core/testing';

import { AppErrorHandler } from './app-error-handler.service';

describe('AppErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppErrorHandler]
    });
  });

  it('should be created', inject([AppErrorHandler], (service: AppErrorHandler) => {
    expect(service).toBeTruthy();
  }));
});
