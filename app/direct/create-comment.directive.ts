import { Component, Directive } from 'angular2/core';
import { Collapse } from './collapse';
import { Comment } from '../model/comment';

@Component({
    selector: 'create-comment',
  template: `
  <button class="btn btn-default" (click)="isCollapsed = !isCollapsed">Add a comment</button>
  <form (ngSubmit)="onSubmit()" [collapse]="isCollapsed" class="form-control collapse my-form">
      <div class="form-group">
        <label for="alterEgo">Comment: </label>
        <input type="text" class="form-control" [(ngModel)]="model.comment">
      </div>
     <button type="submit" class="btn btn-default">
         <span class="glyphicon glyphicon-ok"></span> Submit
     </button>
     <button class="btn btn-default" (click)="isCollapsed = !isCollapsed">
          <span class="glyphicon glyphicon-arrow-left"></span> Cancel
     </button>
  </form>
  `,
 directives: [Collapse],
  inputs: ['comments']
})
export class CreateCommentDirective {
    public isCollapsed:boolean = true;
    submitted = false;
    model = new Comment();
    comments: Comment[];
    onSubmit() {
        this.isCollapsed = true;
        this.comments.push(this.model);
    }
}
