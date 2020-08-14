# NgxChatbox

[![npm version](https://badge.fury.io/js/ngx-chatbox.svg)](https://badge.fury.io/js/ngx-chatbox)
![npm](https://img.shields.io/npm/v/ngx-chatbox)
![npm](https://img.shields.io/npm/dt/ngx-chatbox)
[![GitHub stars](https://img.shields.io/github/stars/SomeshKb/ngx-chatbot)](https://github.com/SomeshKb/ngx-chatbot/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/SomeshKb/ngx-chatbot)](https://github.com/SomeshKb/ngx-chatbot/issues)

`ngx-chatbot` is an Angular component for creating chat-box.It can be used to simulate chatbot.

![](demo.gif)


## Demo

https://codesandbox.io/s/ngx-chatbox-demo-50jxh

## Installation

To use ngx-datatable in your project install it via [npm](https://www.npmjs.com/package/@swimlane/ngx-datatable):

```bash
npm i ngx-chatbox
```

## Usage example

AppModule.ts
```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxChatboxModule } from "ngx-chatbox";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxChatboxModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
app.component.html
```
<ngx-chatbox
  [chatConfig]="config"
  (onMessageInput)="getMessage($event)"
  [serverResponse]="response">
  </ngx-chatbox>
```
app.component.ts
```typescript
export class AppComponent {
  title = "chat-float";
  response = "";
  config = {
    title: "ChatBot",
    subTitle: "New Way of learning"
  };
  setData(message) {
    this.response = message;
  }
  getMessage($event) {
    console.log($event);
  }
}
```

## License

[![GitHub license](https://img.shields.io/github/license/SomeshKb/ngx-chatbot)](https://github.com/SomeshKb/ngx-chatbot/blob/master/LICENSE)





