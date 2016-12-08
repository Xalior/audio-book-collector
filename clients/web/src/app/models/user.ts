
export class User {
  id: number;
  username: string;
  name: string;
  email: string;
  sessions: any[];
  admin: boolean;
}

export const UserReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
