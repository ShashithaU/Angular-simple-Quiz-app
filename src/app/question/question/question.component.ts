import { Component, computed, inject } from '@angular/core';
import { AnswerComponent } from "../../answer/answer/answer.component";
import QuizService from '../../quiz/services/quiz.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
quizService = inject(QuizService);
}
