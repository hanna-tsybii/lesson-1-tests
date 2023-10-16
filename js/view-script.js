document.addEventListener('DOMContentLoaded', function () {
    const questionTitle = document.getElementById('questionTitle');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    // Load tests
    const tests = JSON.parse(localStorage.getItem('tests'));

    function showQuestion(question) {
        questionTitle.textContent = question.question
        btn1.textContent = question.rightAnswer
        btn2.textContent = question.extra[0]
        btn3.textContent = question.extra[1]
    }

    let index = 0
    let right = 0
    let all = 0

    function showResult() {
        questionTitle.textContent = `${(right / all) * 100} %`
        btn1.hidden = true
        btn2.hidden = true
        btn3.hidden = true
    }

    function checkTest() {
        if (index == tests.length) {
            showResult()
        }
    }

    showQuestion(tests[index])

    btn1.addEventListener("click", function() {
        right++;
        all++;
        index++;
        checkTest()
        showQuestion(tests[index])
    })
    btn2.addEventListener("click", function() {
        all++;
        index++;
        checkTest()
        showQuestion(tests[index])
    })
    btn3.addEventListener("click", function() {
        all++;
        index++;
        checkTest()
        showQuestion(tests[index])
    })
});

