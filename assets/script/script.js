const navarLink = document.querySelectorAll('.navbar__link')
navarLink.forEach(link => {
    link.addEventListener('click', (e) => {
        navarLink.forEach(link => {
            link.classList.remove('navbar__link--active')
        })
        e.target.classList.add('navbar__link--active')
    })
})

const feedbackDots = document.querySelectorAll('.feedback__dot')
const feedbackLeft = document.querySelectorAll('.feedback-left')
const feedbackRight = document.querySelectorAll('.feedback-right')
feedbackDots.forEach((dot) => {
    dot.addEventListener('click', e => {
        feedbackDots.forEach(dot => {
            dot.classList.remove('feedback__dot--active')
        })
        e.target.classList.add('feedback__dot--active')
        index = e.target.dataset.index
        feedbackLeft.forEach(feedback => {
            feedback.style.transform = `translateX(${-(index - 1) * 100}%)`
        })
        feedbackRight.forEach(feedback => {
            feedback.style.transform = `translateX(${-(index - 1) * 100}%)`
        })
    })
})

