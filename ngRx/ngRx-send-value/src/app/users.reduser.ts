import { createReducer, on } from '@ngrx/store';
import { UserModel } from './user.model';
import { addUser } from './users.action';

export const initialState: UserModel[] = [];

export const usersReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => {
    const myNewUser = { ...user, name: 'Mr.' + user.name };
    return [...state, myNewUser];
  })
);
