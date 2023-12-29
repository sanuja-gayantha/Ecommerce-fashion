import { TestBed } from '@angular/core/testing';

import { CardItemsService } from './card-items.service';

describe('CardItemsService', () => {
  let service: CardItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
