import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { UserAnswer } from '../../models/userAnswer.model';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private readonly router: Router
  ) {}
  listData: UserAnswer | undefined;
  ngOnInit() {
    this.listData = this.dataService.getData();
  }

  back() {
    this.dataService.clearData();
    this.router.navigate(['form/builder']);
  }
}
