import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json"});
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json"});
  }

  postScores(newScore) {
    return this.http.post("/api/scores", newScore, { responseType: "json"});
  }

  
  

}
