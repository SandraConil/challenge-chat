import { Component, Input } from '@angular/core';
import { Chat } from '../chat';


@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

 affich: boolean;
 constructor(){this.affich = false;}
  

  @Input() arrayKitten: Chat [] | undefined;

@Input()arrayUtilisateur: Chat[]| undefined;  

  adoptChat(chat:Chat, index:number){
    this.arrayUtilisateur?.push(chat);
    // this.arrayKitten = this.arrayKitten?.filter((chat)=>{
    // chat.name !== chat.name})
    this.arrayKitten?.splice(index,1);

  }





}
