import { Component, computed, inject, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { QuizService } from '../../quiz/services/quiz.service';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();
  quizService = inject(QuizService);

  letterMapping = ['A', 'B', 'C', 'D'];
  isCorrectAnswer = computed(
    () =>
      !!this.quizService.currentAnswer() &&
      this.answerText() === this.quizService.currentQuestion().correctAnswer,
  );
  isWrongAnswer = computed(
    () =>
      this.answerText() === this.quizService.currentAnswer() &&
      this.quizService.currentAnswer() !==
        this.quizService.currentQuestion().correctAnswer,
  );
}
