import { createAction, props } from '@ngrx/store';
import { UserModel } from './user.model';

export const addUser = createAction(
  '[Users]add user',
  props<{ user: UserModel }>()
);
