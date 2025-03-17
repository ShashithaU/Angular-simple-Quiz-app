import { Component, computed, inject, input } from '@angular/core';
import QuizService from '../../quiz/services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
answerText = input.required<String>();
answerIndex = input.required<number>();
quizeService = inject(QuizService);
letterMappingArray = ['A', 'B', 'C', 'D'];

isCorrectAnswer = computed(() => !!this.quizeService.currentAnswer() && this.answerText() === this.quizeService.currentQuestion().correctAnswer); 
isWrongAnswer = computed(() => this.answerText() === this.quizeService.currentAnswer() && this.quizeService.currentAnswer() !== this.quizeService.currentQuestion().correctAnswer); 


}
