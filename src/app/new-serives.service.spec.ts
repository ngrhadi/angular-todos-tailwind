import { TestBed } from '@angular/core/testing';

import { NewSerivesService } from './new-serives.service';

describe('NewSerivesService', () => {
  let service: NewSerivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSerivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
