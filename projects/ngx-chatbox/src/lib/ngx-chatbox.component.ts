import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ChatConfig } from './chat-config';

@Component({
  selector: 'ngx-chatbox',
  templateUrl: './ngx-chatbox.component.html',
  styleUrls: ['./ngx-chatbox.component.css']
})
export class NgxChatboxComponent implements OnInit {
  @ViewChild('autoScroll',{ static: true }) private myScrollContainer: ElementRef;
  @Input() chatConfig:ChatConfig;
  @Input() set serverResponse(value: string) {
    this.addServerResponse(value);
  }
  @Output() onMessageInput: EventEmitter<any> = new EventEmitter<any>();

  messages = [];
  constructor() {}
  userMessage = '';
  isModalActive = false;
  isBotActive = false;
  ngOnInit(): void {
    this.messages = [];
  }

  showDialog() {
    this.isModalActive = true;
    let modal_t = document.getElementById('chat_modal');
    modal_t.classList.remove('hidden-chat');
    modal_t.classList.add('show-chat');
  }
  closeDialog() {
    this.isModalActive = false;
    let modal_t = document.getElementById('chat_modal');
    modal_t.classList.remove('show-chat');
    modal_t.classList.add('hidden-chat');
  }

  pushData() {
    if (this.userMessage.trim() != '') {
      this.onMessage(this.userMessage);
      this.messages.push({ type: 'user', message: this.userMessage });
      this.userMessage = '';
      this.isBotActive = true;
      this.scrollToBottom();
    }
  }

  addServerResponse(serverResponse) {
    this.messages.push({ type: 'bot', message: serverResponse });
    this.isBotActive = false;
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop =
          32 + this.myScrollContainer.nativeElement.scrollHeight;
        this.myScrollContainer.nativeElement.scroll({
          top: this.myScrollContainer.nativeElement.scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, 100);
    } catch (err) {}
  }

  public onMessage(date: any): void {
    this.onMessageInput.emit(date.trim());
  }
}
