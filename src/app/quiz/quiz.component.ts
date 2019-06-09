import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]

})


export class QuizComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
