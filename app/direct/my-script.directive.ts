import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[my-script]'
})
//https://angular.io/docs/ts/latest/guide/attribute-directives.html
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
