import { TestBed } from '@angular/core/testing';

import { AsuntosService } from './asuntos.service';

describe('AsuntosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsuntosService = TestBed.get(AsuntosService);
    expect(service).toBeTruthy();
  });
});
