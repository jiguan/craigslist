export class Comment {
  id: string;
  comment: string;
  postId: string;
  userId: string;

  public constructor(postId: string, public userId: string) {
      this.postId = postId;
      this.userId = userId;
  }
}
