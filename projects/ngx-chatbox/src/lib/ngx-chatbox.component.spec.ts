import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChatboxComponent } from './ngx-chatbox.component';

describe('NgxChatboxComponent', () => {
  let component: NgxChatboxComponent;
  let fixture: ComponentFixture<NgxChatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
