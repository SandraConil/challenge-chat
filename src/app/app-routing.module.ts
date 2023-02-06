import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';


const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
