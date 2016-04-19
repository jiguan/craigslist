import {User} from '../user';

export class Comment {
  id: string;
  comment: string;
  postId: string;
  user: User;

  public constructor(postId: string, public user: User) {
      this.postId = postId;
      this.user = user;
  }
}
