export class UserAnswer {
  questions: Question[] = [];
  about: string | undefined;
  constructor(props: any) {
    Object.assign(this, props);
  }
}

export interface Question {
  text: string;
  answerFormat: ANSWER_FORMAT;
  answerOptions: Answer[];
  isRequired: boolean;
  otherAnswer: boolean;
  userAnswer?: string;
}

export interface Answer {
  value: string;
  checked: boolean;
}

export enum ANSWER_FORMAT {
  PARAGRAPH = 'PARAGRAPH',
  CHECKBOX = 'CHECKBOX',
}

export const LIST_ANSWER_FORMAT = [
  {
    name: 'Paragraph Answer',
    value: ANSWER_FORMAT.PARAGRAPH,
  },
  {
    name: 'Checkbox List',
    value: ANSWER_FORMAT.CHECKBOX,
  },
];
