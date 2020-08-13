# NgxChatbox

[![npm version](https://badge.fury.io/js/ngx-chatbox.svg)](https://badge.fury.io/js/ngx-chatbox)

`ngx-chatbot` is an Angular component for creating chat-box.It can be used to simulate chatbot.

<iframe src="https://codesandbox.io/embed/elastic-rhodes-50jxh?fontsize=14&hidenavigation=1&theme=dark">

## Installation

To use ngx-datatable in your project install it via [npm](https://www.npmjs.com/package/@swimlane/ngx-datatable):

```
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




Working demo can be found below
https://codesandbox.io/s/ngx-chatbox-demo-50jxh


How 



