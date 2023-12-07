import { Component, Inject } from '@angular/core';
import { ModalCreateComponent } from '../modal-create/modal-create.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { ModalAddNewQuestionComponent } from '../modal-add-new-question/modal-add-new-question.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateComponent, {
      height: 'auto',
      width: '600px',
      data: { name: 'test', animal: 'test' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
