import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './edit/edit-user.component';
import { ListUserComponent } from './list/list-user.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CreateUserComponent, ListUserComponent],
  exports: [CreateUserComponent, ListUserComponent],
  providers: [NameListService]
})
export class UserModule { }
