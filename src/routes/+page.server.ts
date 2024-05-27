import questions from './questions.json';
import type Question from './Question';

const allQuestions: Question[] = questions;

export async function load() {
	const questionsToReturn: Question[] = [];
	// repeat until desired number of questions
	do {
		// get random question
		const questionIndex = Math.floor(Math.random() * allQuestions.length);
		const question = questions[questionIndex];
		if (!questionsToReturn.some((q) => q.letter === question.letter)) {
			questionsToReturn.push(question);
		}
	} while (questionsToReturn.length < 20);
	return {
		status: 200,
		body: {
			questions: questionsToReturn
		}
	};
}
