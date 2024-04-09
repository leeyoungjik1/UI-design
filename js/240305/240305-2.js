const quizContainer = document.querySelector('.quiz-container')
let index = 0
let score = 0
const mathProblems = [
{
  query: '3 + 3 = ?',
  examples: [7, 2, -6, 6],
  answer: 6
},
{
  query: '9 * 4 = ?',
  examples: [30, 13, 36, 34],
  answer: 36
},
{
  query: '18 - 31 = ?',
  examples: [-9, 13, -2, -13],
  answer: -13
},
{
  query: '28 / 2 = ?',
  examples: [13, 14, 0, 8],
  answer: 14
},
{
  query: '(3 + 4) * 7 = ?',
  examples: [49, 14, 21, 7],
  answer: 49
}
]

function showPrompt(problem){
    const answer = prompt(`${problem.query} 문제에 대한 답을 입력해주세요!`, 0)
    console.log(answer, typeof(answer))

    if(+answer === problem.answer){
        score += 20
    }else{
        alert('정답이 아닙니다.')
    }
    index++
    if(index > mathProblems.length -1){
        alert(`당신의 최종점수는 ${score}점입니다.`)
        document.getElementById("answer-btn").disabled = true
        return;
    }else{
        displayQuiz(mathProblems[index])
    }
}

function displayQuiz(problem){
    quizContainer.innerHTML = `
    <p class="question">${problem.query}</p>
    <ol>
        <li>${problem.examples[0]}</li>
        <li>${problem.examples[1]}</li>
        <li>${problem.examples[2]}</li>
        <li>${problem.examples[3]}</li>
    </ol>
    <input type="button" value="정답 확인하기" id="answer-btn">
    `

    document.getElementById('answer-btn')
    .addEventListener('click', () => showPrompt(problem))
}



displayQuiz(mathProblems[index])