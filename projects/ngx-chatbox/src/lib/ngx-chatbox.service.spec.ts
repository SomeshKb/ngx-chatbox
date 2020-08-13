import { TestBed } from '@angular/core/testing';

import { NgxChatboxService } from './ngx-chatbox.service';

describe('NgxChatboxService', () => {
  let service: NgxChatboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxChatboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
