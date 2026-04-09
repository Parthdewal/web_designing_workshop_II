function calculateResult() {

    let numSubjects = parseInt(document.getElementById("numSubjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let totalMarks = 0;
    let marksArray = [];

    for (let i = 1; i <= numSubjects; i++) {

        let mark = parseFloat(prompt("Enter marks for Subject " + i + " (out of 100):"));

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks! Enter between 0 and 100.");
            return;
        }

        marksArray.push(mark);
        totalMarks += mark;
    }

    let averageMarks = (totalMarks / numSubjects).toFixed(2);

    let grade, gradeClass;

    if (averageMarks >= 90) {
        grade = "A";
        gradeClass = "grade-A";
    } 
    else if (averageMarks >= 75) {
        grade = "B";
        gradeClass = "grade-B";
    } 
    else if (averageMarks >= 60) {
        grade = "C";
        gradeClass = "grade-C";
    } 
    else if (averageMarks >= 40) {
        grade = "D";
        gradeClass = "grade-D";
    } 
    else {
        grade = "F";
        gradeClass = "grade-F";
    }

    let resultStatus = averageMarks >= 40 ? "PASS" : "FAIL";
    let resultClass = averageMarks >= 40 ? "pass" : "fail";

    let resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = `
        <h2>📊 Result Summary</h2>

        <div class="result-item">
            <span>Subjects</span>
            <span>${numSubjects}</span>
        </div>

        <div class="result-item">
            <span>Total Marks</span>
            <span>${totalMarks}</span>
        </div>

        <div class="result-item">
            <span>Average</span>
            <span>${averageMarks}</span>
        </div>

        <div class="result-item">
            <span>Grade</span>
            <span class="grade-badge ${gradeClass}">${grade}</span>
        </div>

        <div class="result-item">
            <span>Result</span>
            <span class="${resultClass}">${resultStatus}</span>
        </div>
    `;
    resultBox.classList.remove("d-none");
}