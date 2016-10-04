import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-confirmation-dialog',
  templateUrl: 'confirmation-dialog.component.html',
  styleUrls: ['confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @ViewChild('modal') public modal: ModalDirective;

  @Input() title: string = 'Confirmation';
  @Input() question: string;
  @Output() yesClick: EventEmitter<any>;

  open() {
    this.yesClick = new EventEmitter();
    this.modal.show();
    return this;
  }

  onYesClicked() {
    this.modal.hide();
    this.yesClick.emit('Yes');
  }
}
