import { NgModule } from '@angular/core';
import { ChatPage } from './chat.page';
import { ChatService } from '../services/chat-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatPageRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [
    ChatPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
  ],
  exports: [
    ChatPage
  ],
  providers: [
    ChatService
  ]
})
export class ChatPageModule {
}
