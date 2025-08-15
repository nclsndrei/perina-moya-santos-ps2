document.getElementById("calculate-button").addEventListener("click", function() {
    // Get quiz values and compute avg
    let quiz1 = parseFloat(document.getElementById("quiz-one").value) || 0;
    let quiz2 = parseFloat(document.getElementById("quiz-two").value) || 0;
    let quiz3 = parseFloat(document.getElementById("quiz-three").value) || 0;
    let quizAvg = (quiz1 + quiz2 + quiz3) / 3;

    // Get lab values and compute avg
    let lab1 = parseFloat(document.getElementById("lab-one").value) || 0;
    let lab2 = parseFloat(document.getElementById("lab-two").value) || 0;
    let lab3 = parseFloat(document.getElementById("lab-three").value) || 0;
    let labAvg = (lab1 + lab2 + lab3) / 3;

    // Get assignment values and compute avg
    let ass1 = parseFloat(document.getElementById("ass-one").value) || 0;
    let ass2 = parseFloat(document.getElementById("ass-two").value) || 0;
    let assAvg = (ass1 + ass2) / 2;

    // Get prelim exam
    let pe = parseFloat(document.getElementById("pg").value) | 0;

    // Get CS
    let cs = (quizAvg * 0.60) + (assAvg * 0.20) + (labAvg * 0.20);

    //Get Final prelim grade
    let pg = (cs * 0.50) + (pe * 0.50);

    // Display results
    document.getElementById("result").innerHTML = `
        <p><strong>Class Standing (CS):</strong> ${cs.toFixed(2)}</p>
        <p><strong>Preliminary Grade (PG):</strong> ${pg.toFixed(2)}</p>
    `;
});