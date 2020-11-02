import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private viewContainer: ViewContainerRef, private TemplateRef: TemplateRef<any>) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for(let i = 0; i<times; i++) {
      this.viewContainer.createEmbeddedView(this.TemplateRef, {});
    }
  }
}