import { Injectable } from '@angular/core';
import { UserAnswer } from '../models/userAnswer.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private storedData: UserAnswer = { about: undefined, questions: [] };
  constructor() {}

  saveData(data: UserAnswer): void {
    this.storedData = data;
  }

  getData(): UserAnswer {
    return this.storedData;
  }

  clearData() {
    this.storedData = { about: undefined, questions: [] };
  }
}
