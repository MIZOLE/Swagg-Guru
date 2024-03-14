import { TestBed } from '@angular/core/testing';

import { juwelary } from './juwelary.service';

describe('ClothesService', () => {
  let service: juwelary;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(juwelary);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
