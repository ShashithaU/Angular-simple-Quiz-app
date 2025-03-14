import { Component } from '@angular/core';
import { AnswerComponent } from "../../answer/answer/answer.component";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

}
