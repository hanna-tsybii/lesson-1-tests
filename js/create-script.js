document.addEventListener('DOMContentLoaded', function () {
    const questionInput = document.getElementById('questionInput')

    const firstInput = document.getElementById('flexRadioInput1')
    const secondInput = document.getElementById('flexRadioInput2')
    const thirdInput = document.getElementById('flexRadioInput3')

    const firstAnswer = document.getElementById('flexRadioDefault1')
    const secondAnswer = document.getElementById('flexRadioDefault2')
    const thirdAnswer = document.getElementById('flexRadioDefault3')

    const addBtn = document.getElementById('addBtn')

    var tests = []

    function saveTests() {
        localStorage.setItem('tests', JSON.stringify(tests))
    }

    function addTest(e) {
        e.preventDefault()
        console.log(firstInput)

        let checkedAnswer = ''
        let extraAnswer = []

        // Переробити масив, замість екстара ансверів зробити один під-масив із всіма відповідями
        if (firstAnswer.checked === true) {
            checkedAnswer = firstInput.value
            extraAnswer.push(secondInput.value, thirdInput.value)
        } else if (secondAnswer.checked === true) {
            checkedAnswer = secondInput.value
            extraAnswer.push(thirdInput.value, firstInput.value)
        } else if (thirdAnswer.checked === true) {
            checkedAnswer = thirdInput.value
            extraAnswer.push(secondInput.value, firstInput.value)
        }

        var test = {}

        if (questionInput.value && checkedAnswer && extraAnswer) {
            test.question = questionInput.value
            test.rightAnswer = checkedAnswer
            test.extra = extraAnswer
            alert('Test added')
            questionInput.value = ''
            firstInput.value = ''
            firstAnswer.checked = false
            secondInput.value = ''
            secondAnswer.checked = false
            thirdInput.value = ''
            thirdAnswer.checked = false
            tests.push(test)
            saveTests()
        } else {
            alert('All fields must be filled')
        }
    }
    addBtn.addEventListener('click', addTest)
})
