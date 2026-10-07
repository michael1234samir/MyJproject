// import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

// @Directive({
//   selector: '[appClickedOutside]'
// })
// export class ClickedOutside {
//   constructor(private el: ElementRef) {}
//   @Output() public clickedoutsides = new EventEmitter();
//   @HostListener('document:click', ['$event.target'])
//   public onclick(target: any) {
//     const ClickedOutside = this.el.nativeElement.contains(target);
//     if (!ClickedOutside) {
//       this.clickedoutsides.emit(target);
//     }
//   }
// }
