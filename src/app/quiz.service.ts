import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  userName: any;
  userScore: number = 0;
  resultScore: number;
  quizQuestions: any;
  topScores: any;

  constructor(private http: HttpClient, private router: Router) {}

  // gets questions from SQL DB
  getQuestions() {
    return this.http.get("/api/questions", {
      responseType: "json"
    });
  }

  // sets questions gotten from component to service
  setQuestions(questions) {
    this.quizQuestions = questions;
  }

  // get username and scores from SQL DB
  getScores() {
    return this.http.get("/api/scores", { responseType: "json" });
  }

  // post username and score to SQL DB
  postScores(scoreData) {
    // this.userName = scoreData.userName;
    // console.log("userName: ", this.userName);
    // console.log("Score: ", this.userScore);
    // console.log({ username: this.userName, score: this.userScore });
    // console.log(scoreData);

    this.http
      .post("/api/scores", scoreData, { responseType: "json" })
      .subscribe(response => {
        this.topScores = response;
        this.router.navigate(["/results"]);
      });
  }

  getScoreInfo(form, questions) {
    // console.log(form);
    // console.log(questions);
    let answerArray = Object.values(form.value); // Object.values converts object into an array of strings
    // console.log(Object.values(form.value));
    // console.log(answerArray);
    // this.userName = answerArray[0];
    // console.log(this.userName);
    // console.log(questions[0].answer);
    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i] === questions[i].answer) {
        // console.log(`Got one right`);
        this.userScore++;
      }
    }
    this.resultScore = this.userScore;
    this.postScores({ username: this.userName, score: this.userScore });
    this.userScore = 0;
    // console.log(this.userName);
    // console.log(this.userScore);
    return this.resultScore;
  }

  getNameInfo(form) {
    this.userName = form.value.userName;
    // console.log(this.userName);
    return this.userName;
  }
}
