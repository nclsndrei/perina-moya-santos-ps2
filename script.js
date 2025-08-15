
const $ = (id) => document.getElementById(id);

const read = (id) => {
  const s = $(id).value.trim();
  if (s === '') return null;
  const n = parseFloat(s);
  return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : null;
};

const avg = (arr) => {
  const v = arr.filter((x) => x != null);
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
};


function compute() {
  $("message").textContent = "";

  // WARNING Prelim Grade
  const pg = read("pg");
  if (pg == null) {
    $("mgOut").textContent = "—";
    $("message").textContent = "Prelim Grade (PG) is required.";
    return;
  }

  //MIDTERM AND CS 
  const qAvg = avg([read("quiz_1"), read("quiz_2"), read("quiz_3")]) ?? 0;
  const lAvg = avg([read("l1"), read("l2"), read("l3")]) ?? 0;
  const aAvg = avg([read("assignment_1"), read("assignment_2")]) ?? 0;
  const cs = 0.60 * qAvg + 0.20 * aAvg + 0.20 * lAvg;

  // CS + PE
  const practical_exam = read("practical_exam") ?? 0;
  const midtermOnly = 0.5 * cs + 0.5 * practical_exam;

  // F MIDTERM
  const mg = pg / 3 + (2 * midtermOnly) / 3;
  $("mgOut").textContent = mg.toFixed(1);
}

// ResetBTN
function resetAll() {
  document.querySelectorAll("input").forEach((i) => (i.value = ""));
  $("mgOut").textContent = "—";
  $("message").textContent = "";
}


window.addEventListener("DOMContentLoaded", () => {
  $("btnCompute").addEventListener("click", compute);
  $("btnReset").addEventListener("click", resetAll);
});
