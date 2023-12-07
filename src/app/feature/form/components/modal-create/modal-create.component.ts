import { Component, OnInit } from '@angular/core';
import { ModalAddNewQuestionComponent } from '../modal-add-new-question/modal-add-new-question.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { BuilderComponent } from '../builder/builder.component';
import { ANSWER_FORMAT, Question } from '../../models/userAnswer.model';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnInit {
  lstQuestion: Question[] = [];
  answerFormat = ANSWER_FORMAT;

  about: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<BuilderComponent>,
    private readonly router: Router,
    private dataService: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.lstQuestion.push({
      answerFormat: ANSWER_FORMAT.CHECKBOX,
      isRequired: true,
      text: 'Please select the languages you know',
      answerOptions: [
        { value: 'Typescript', checked: false },
        { value: 'Python', checked: false },
        { value: 'C#', checked: false },
      ],
      otherAnswer: true,
    });
  }

  openAddNewQuestion(): void {
    const dialogRef = this.dialog.open(ModalAddNewQuestionComponent, {
      height: 'auto',
      width: '500px',
      data: { name: 'test', animal: 'test' },
    });

    dialogRef.afterClosed().subscribe((result: Question) => {
      console.log(result);
      this.lstQuestion.push(result);
    });
  }

  submit() {
    this.dataService.saveData({
      about: this.about,
      questions: this.lstQuestion,
    });
    this.dialogRef.close();
    this.router.navigate(['/form/answers']);
  }
}
