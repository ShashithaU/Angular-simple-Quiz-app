import { Component } from '@angular/core';
import { QuestionComponent } from "../../question/question/question.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizComponent, QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
