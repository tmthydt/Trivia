import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [QuizService]

})
export class ResultsComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

}
