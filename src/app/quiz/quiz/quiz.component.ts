import { Component, inject, OnInit } from '@angular/core';
import { QuestionComponent } from "../../question/question/question.component";
import { QuizService } from '../services/quiz.service';



@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizComponent, QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  quizeService = inject(QuizService); 
ngOnInit(): void {
  this.quizeService.getQuestions().subscribe({
    next : (questions) => {
      this.quizeService.questions.set(questions);
  },
  error : (err) => {
    console.log('er',err.message);
    this.quizeService.error.set(err.message);
  }

})


}
}
