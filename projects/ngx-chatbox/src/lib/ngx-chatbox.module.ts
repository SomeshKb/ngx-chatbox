import { NgModule } from '@angular/core';
import { NgxChatboxComponent } from './ngx-chatbox.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [NgxChatboxComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [NgxChatboxComponent]
})
export class NgxChatboxModule { }
