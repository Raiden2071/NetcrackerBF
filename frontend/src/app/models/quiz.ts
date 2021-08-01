
export interface Quiz {
  quizId: number,
  title: String,
  description: String,
  quizType: number,
  creationDate: Date,
  authorId: number,
  questions: [
    {
      questionId: number,
      questionText: String, 	// текст вопроса
      questionType: number,
      answers: [
        {
          answerId: number,
          value: String,  // текст ответа
          answer: Boolean,
          questionId: number
        }
      ]
    }
  ]
}



