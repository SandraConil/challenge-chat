import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Chat} from '../chat';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
//on veut recuperer le tableau
@Input() arrayKitten:Chat [] | undefined;


monForm;
@Output() formOk : EventEmitter<Chat> = new EventEmitter();

constructor(FormBuild : FormBuilder){
  this.monForm = FormBuild.group({
    name: ['', Validators.required],
    born : [new Date(), Validators.required],
    race: ['',Validators.required],
    picture: ['', Validators.required],
  });
}

onSubmit(){
  if(this.monForm.valid){
    this.formOk.emit(new Chat
      (this.monForm.controls.name.value,
        this.monForm.controls.born.value,
        this.monForm.controls.race.value,
        this.monForm.controls.picture.value,));
  }
}

name="";
born=new Date();
race="";
picture="";

  createKitten(){ 
  this.arrayKitten?.push(new Chat(this.name, this.born,this.race,this.picture) )}


}
