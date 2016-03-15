import { Component, Directive } from 'angular2/core';
import { Collapse } from './collapse';
import { Post } from '../model/post';
//http://valor-software.com/ng2-bootstrap/
@Component({
    selector: 'create-post',
// })
// //https://angular.io/docs/ts/latest/guide/attribute-directives.html
// @View({
//https://angular.io/docs/ts/latest/guide/forms.html
  template: `
  <button id="new-post-btn" class="btn btn-default" (click)="isCollapsed = !isCollapsed">Create a new post</button>
      {{diagnostic}}
  <form (ngSubmit)="onSubmit()" [collapse]="isCollapsed" class="form-control collapse my-form">
      <div class="form-group">
        <label for="alterEgo">Title: </label>
        <input type="text" class="form-control" [(ngModel)]="model.title">
      </div>
      <div class="form-group">
        <label for="alterEgo">Detail: </label>
        <input type="text" class="form-control" [(ngModel)]="model.detail">
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
 inputs: ['posts']
})
export class CreatePostDirective {
    public isCollapsed:boolean = true;
    submitted = false;
    model = new Post();
    posts: Post[];
    onSubmit() {
        this.isCollapsed = true;
        this.posts.push(this.model);
    }
}
