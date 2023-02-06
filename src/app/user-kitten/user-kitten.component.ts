import { Component, Input } from '@angular/core';
import { Chat } from '../chat';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
  @Input()arrayUtilisateur: Chat[]| undefined;  

}
