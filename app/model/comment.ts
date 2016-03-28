export class Comment {
  id: string;
  comment: string;
  post: string;
  user: string;

  public constructor(postId: string, public userId: string) {
      this.post = postId;
      this.user = userId;
  }
}
