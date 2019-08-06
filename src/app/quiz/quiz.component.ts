import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  quizQuestions: any;
  // userScore: number;
  showQuestions: boolean = false;

  constructor(private quizService: QuizService) {
    this.quizService.getQuestions().subscribe(response => {
      this.quizQuestions = response;
      this.quizService.setQuestions(response); // send questions generated in component to service
      // console.log(this.quizService.quizQuestions);
    });
  }

  getScoreInfo(form) {
    this.quizService.getScoreInfo(form, this.quizQuestions);
    this.showQuestions = false;
  }

  getNameInfo(form) {
    this.quizService.getNameInfo(form);
    this.showQuestions = true;
    // console.log(this.quizService.userName);
    // console.log(this.showQuestions);
  }

  // displayQuestions() {
  //   console.log(this.quizService.userName);
  //   console.log(this.showQuestions);
  //   this.showQuestions = true;
  // }

  ngOnInit() {}
}
