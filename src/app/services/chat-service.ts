import { Injectable } from '@angular/core';
// import { Events } from 'ionic-angular';
import { map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

export interface User {
  uid: string;
  email: string;
}
 
export interface Message {
  createdAt: string;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {
  }

  getChatMessages() {
    let messages: Message[] = [{
      createdAt: 'dfdfdfdfdf',
      id: 'test',
      from: 'test',
      msg: 'testddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      fromName: 'test',
      myMsg: true
    },{
      createdAt: 'dfdfdfdfdf',
      id: 'test',
      from: 'test',
      msg: 'test dfdfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      fromName: 'test',
      myMsg: false
    },
    {
      createdAt: 'dfdfdfdfdf',
      id: 'test',
      from: 'test',
      msg: 'testdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      fromName: 'test',
      myMsg: true
    }, {
      createdAt: 'dfdfdfdfdf',
      id: 'test',
      from: 'test',
      msg: 'testdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      fromName: 'test',
      myMsg: true
    },
    {
      createdAt: 'dfdfdfdfdf',
      id: 'test',
      from: 'test',
      msg: 'testdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      fromName: 'test',
      myMsg: true
    },
    {
      createdAt: 'dfdfdfdfdf',
      id: 'test',
      from: 'test',
      msg: 'testdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      fromName: 'test',
      myMsg: true
    }];

    return of(messages);
    // let users = [];
    // return this.getUsers().pipe(
    //   switchMap(res => {
    //     users = res;
    //     return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
    //   }),
    //   map(messages => {
    //     // Get the real name for each user
    //     for (let m of messages) {          
    //       m.fromName = this.getUserForMsg(m.from, users);
    //       m.myMsg = this.currentUser.uid === m.from;
    //     }        
    //     return messages
    //   })
    // )
  }

  addChatMessage(msg) {
    // return this.afs.collection('messages').add({
    //   msg: msg,
    //   from: this.currentUser.uid,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp()
    // });
  }
}
