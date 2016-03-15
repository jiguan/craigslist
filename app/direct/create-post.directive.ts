import { Component, Directive } from 'angular2/core';
import { Collapse } from './collapse';
@Component({
    selector: 'create-post',
// })
// //https://angular.io/docs/ts/latest/guide/attribute-directives.html
// @View({
  template: `
  <button id="new-post-btn" class="btn btn-default" (click)="isCollapsed = !isCollapsed">Create a new post</button>
  <div [collapse]="isCollapsed" class="form-control collapse my-form">
      {{diagnostic}}
      <form>
          <div class="form-group">
            <label for="alterEgo">Title: </label>
            <input type="text" class="form-control" ><!--[(ngModel)]="post.title" -->
          </div>
          <div class="form-group">
            <label for="alterEgo">Detail: </label>
            <input type="text" class="form-control">
          </div>
         <button type="submit" class="btn btn-default" (click)="submit(post)">
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
export class CreatePostDirective {
    public isCollapsed:boolean = true;
}
