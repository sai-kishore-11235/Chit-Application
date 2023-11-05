import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChitListComponent } from './chit-list/chit-list.component';
import { CreateChitComponent } from './create-chit/create-chit.component';
import { EditChitComponent } from './edit-chit/edit-chit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'chitList', component: ChitListComponent },
  { path: 'chit-create', component: CreateChitComponent },
  { path: 'chitList/edit/:id', component: EditChitComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
