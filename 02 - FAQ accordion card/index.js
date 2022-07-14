const faqQuestionEls = document.querySelectorAll('.faq-question')
const faqAnswerEls = document.querySelectorAll('.faq-answer')

function showFaq(event) {
	let isActive = event.target.parentNode.classList.contains('active')

	// takes the font-weight away and sets answers display: none
	faqQuestionEls.forEach((element) => {
		element.classList.remove('active')
	})
	faqAnswerEls.forEach((element) => {
		element.classList.remove('active')
	})

	if (isActive) return

	//
	setTimeout(() => {
		event.target.parentNode.classList.add('active')
		const answerEl = event.target.parentNode.parentNode.children[1]
		answerEl.classList.add('active')
	}, 300)
}

faqQuestionEls.forEach((element) => {
	element.addEventListener('click', showFaq)
})
