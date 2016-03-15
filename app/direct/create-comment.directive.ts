import { Component, Directive } from 'angular2/core';
import { Collapse } from './collapse';
@Component({
    selector: 'create-comment',
  template: `
  <button class="btn btn-default" (click)="isCollapsed = !isCollapsed">Add a comment</button>
  <div [collapse]="isCollapsed" class="form-control collapse my-form">
      <form>
          <div class="form-group">
            <label for="alterEgo">Comment: </label>
            <input type="text" class="form-control" ><!--[(ngModel)]="post.title" -->
          </div>
         <button type="submit" class="btn btn-default" (click)="submit(comment)">
             <span class="glyphicon glyphicon-ok"></span> Submit
         </button>
         <button class="btn btn-default" (click)="isCollapsed = !isCollapsed">
              <span class="glyphicon glyphicon-arrow-left"></span> Cancel
         </button>
      </form>
  </div>
  `,
 directives: [Collapse]
})
export class CreateCommentDirective {
    public isCollapsed:boolean = true;
}
