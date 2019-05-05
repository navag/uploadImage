import { TestBed, inject } from '@angular/core/testing';

import { ImgOpertionsService } from './img-opertions.service';

describe('ImgOpertionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgOpertionsService]
    });
  });

  it('should be created', inject([ImgOpertionsService], (service: ImgOpertionsService) => {
    expect(service).toBeTruthy();
  }));
});
