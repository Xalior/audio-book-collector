// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const GET = 'GET';
export const SET = 'SET';

let user = {
  "username":"admin",
  "name":"root",
  "email":"abc.d@xalior.com",
  "admin":true
};

export const userReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch (action.type) {
        // case GET:
        //     return {
        //       "username":"admin",
        //       "name":"root",
        //       "email":"abc.d@xalior.com",
        //       "admin":true
        //     };
      default:
            return state;
    }
}
