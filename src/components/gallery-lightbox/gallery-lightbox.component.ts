import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'gallery-lightbox',
  template: `<gallery [@slideGalleryIn] [isOverlay]="true"></gallery>`,
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations: [
    trigger('slideGalleryIn', [
      state('void', style({transform: 'translateY(25%) scale(0.9)', opacity: 0})),
      state('enter', style({transform: 'translateY(0%) scale(1)', opacity: 1})),
      state('exit', style({transform: 'translateY(25%)', opacity: 0})),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GalleryLightboxComponent {

  @Output() keyDown = new EventEmitter<KeyboardEvent>();

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    this.keyDown.next(ev);
  }

}
