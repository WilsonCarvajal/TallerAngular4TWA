import { TestBed, inject } from '@angular/core/testing';

import { ObjetosService } from './objeto.service';

describe('ObjetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjetosService]
    });
  });

  it('should be created', inject([ObjetosService], (service: ObjetosService) => {
    expect(service).toBeTruthy();
  }));
});
