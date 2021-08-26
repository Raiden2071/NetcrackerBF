
export interface Quiz {
  quizId: number,
  title: String,
  description: String,
  quizType: QuizType,
  creationDate: Date,
  authorId: number,
  questions?: [
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


export enum Filter {
  DATE = 'Date',
  MATHEMATICS = "Mathematics",
  HISTORIC = "History",
  SCIENCE = "Science",
  GEOGRAPHICAL = "Geographical",
  COMPLETED = 'Completed',
  FAVORITES = 'Favorites'
}

export enum QuizType {
  HISTORIC = "history",
  SCIENCE = "science",
  GEOGRAPHICAL = "geographical",
  MATHEMATICS = "mathematics"
}

export enum QuestionType {
  FOUR_ANSWERS = "Four answers",
  TRUE_FALSE = "Two answers"
}