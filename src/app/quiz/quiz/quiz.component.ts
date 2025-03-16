import { Component, inject } from '@angular/core';
import { QuestionComponent } from "../../question/question/question.component";
import QuizService from '../services/quiz.service';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizComponent, QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
quizeService = inject(QuizService);


}
