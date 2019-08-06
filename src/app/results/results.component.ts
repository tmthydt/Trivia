import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  quizQuestions: any;
  userName: string;
  resultScore: number;
  isCorrect: boolean = true;
  // userAnswer: any[];

  constructor(private quizService: QuizService) {
    this.quizQuestions = this.quizService.quizQuestions;
    this.userName = this.quizService.userName;
    this.resultScore = this.quizService.resultScore;
    // console.log(this.resultScore);
    // this.userAnswer = this.quizService.userAnswer;
  }

  ngOnInit() {}
}
