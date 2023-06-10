import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAction]',
})
export class ActionDirective {
  @Output() appAction: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public handleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('click', ['$event'])
  public handleKeyup(event: KeyboardEvent): void {
    this.appAction.emit(event);
  }
}
