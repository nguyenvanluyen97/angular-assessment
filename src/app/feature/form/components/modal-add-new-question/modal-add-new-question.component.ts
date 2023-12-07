import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalCreateComponent } from '../modal-create/modal-create.component';
import {
  ANSWER_FORMAT,
  LIST_ANSWER_FORMAT,
  Question,
} from '../../models/userAnswer.model';

@Component({
  selector: 'app-modal-add-new-question',
  templateUrl: './modal-add-new-question.component.html',
  styleUrls: ['./modal-add-new-question.component.scss'],
})
export class ModalAddNewQuestionComponent {
  @Output() onQuestionAdded = new EventEmitter<any>();
  lstAnswers = LIST_ANSWER_FORMAT;
  enumAnswerFormat = ANSWER_FORMAT;

  newQuestion: Question = {
    text: '',
    answerFormat: ANSWER_FORMAT.PARAGRAPH,
    answerOptions: [],
    isRequired: false,
    otherAnswer: false,
  };
  constructor(public dialogRef: MatDialogRef<ModalCreateComponent>) {}

  addQuestion(): void {
    if (!this.newQuestion.text) {
      alert('Please enter a question.');
      return;
    }
    this.dialogRef.close({ ...this.newQuestion });
    this.resetNewQuestion();
  }

  addOption(): void {
    if (this.newQuestion.answerOptions.length < 5) {
      this.newQuestion.answerOptions.push({ value: '', checked: false });
    }
  }

  resetNewQuestion(): void {
    this.newQuestion = {
      text: '',
      answerFormat: ANSWER_FORMAT.PARAGRAPH,
      answerOptions: [],
      isRequired: false,
      otherAnswer: false,
    };
  }
}
