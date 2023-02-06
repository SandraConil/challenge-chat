import { Component } from '@angular/core';
import { Chat } from './chat';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge_interactions';
  monForm : FormGroup | undefined;

  chats: Chat []= [{name : "Hamburger",born: new Date() ,race:"Gouttiere",picture:'../assets/chat1.jpg'},
  {name : "Coca",born: new Date(),race:"rodeo",picture:'../assets/chat2.jpg'},
  {name : "Calinoux", born: new Date(),race:"Chamonix",picture:'../assets/chat3.jpg'},]

  
  userChat: Chat[] = []

}
