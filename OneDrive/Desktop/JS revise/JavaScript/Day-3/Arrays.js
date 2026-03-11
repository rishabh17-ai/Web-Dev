// ============================================
//        STUDENT DATA — 20 STUDENTS
// ============================================

const students = [
  { id: 1,  name: "Rahul Sharma",   age: 20, grade: "A", passed: true,  subjects: { math: 92, science: 88, english: 76, history: 85, computer: 95 } },
  { id: 2,  name: "Priya Singh",    age: 21, grade: "B", passed: true,  subjects: { math: 78, science: 82, english: 90, history: 74, computer: 80 } },
  { id: 3,  name: "Amit Kumar",     age: 20, grade: "C", passed: true,  subjects: { math: 65, science: 70, english: 68, history: 72, computer: 60 } },
  { id: 4,  name: "Neha Gupta",     age: 22, grade: "A", passed: true,  subjects: { math: 95, science: 91, english: 88, history: 92, computer: 97 } },
  { id: 5,  name: "Ravi Patel",     age: 21, grade: "F", passed: false, subjects: { math: 35, science: 40, english: 38, history: 42, computer: 30 } },
  { id: 6,  name: "Sneha Joshi",    age: 20, grade: "B", passed: true,  subjects: { math: 80, science: 75, english: 85, history: 78, computer: 82 } },
  { id: 7,  name: "Vikram Nair",    age: 23, grade: "F", passed: false, subjects: { math: 42, science: 38, english: 45, history: 35, computer: 40 } },
  { id: 8,  name: "Pooja Mehta",    age: 21, grade: "A", passed: true,  subjects: { math: 88, science: 94, english: 82, history: 90, computer: 91 } },
  { id: 9,  name: "Arjun Reddy",    age: 20, grade: "C", passed: true,  subjects: { math: 60, science: 65, english: 72, history: 58, computer: 63 } },
  { id: 10, name: "Kavya Iyer",     age: 22, grade: "B", passed: true,  subjects: { math: 75, science: 80, english: 78, history: 82, computer: 77 } },
  { id: 11, name: "Rohan Das",      age: 21, grade: "F", passed: false, subjects: { math: 28, science: 35, english: 40, history: 30, computer: 25 } },
  { id: 12, name: "Ananya Bose",    age: 20, grade: "A", passed: true,  subjects: { math: 91, science: 87, english: 93, history: 89, computer: 94 } },
  { id: 13, name: "Kiran Rao",      age: 23, grade: "C", passed: true,  subjects: { math: 62, science: 68, english: 55, history: 70, computer: 65 } },
  { id: 14, name: "Divya Menon",    age: 21, grade: "B", passed: true,  subjects: { math: 82, science: 78, english: 80, history: 76, computer: 85 } },
  { id: 15, name: "Suresh Pillai",  age: 22, grade: "F", passed: false, subjects: { math: 45, science: 42, english: 48, history: 40, computer: 38 } },
  { id: 16, name: "Meera Nambiar",  age: 20, grade: "A", passed: true,  subjects: { math: 96, science: 93, english: 91, history: 95, computer: 98 } },
  { id: 17, name: "Aditya Verma",   age: 21, grade: "C", passed: true,  subjects: { math: 58, science: 62, english: 70, history: 65, computer: 55 } },
  { id: 18, name: "Ritika Saxena",  age: 20, grade: "B", passed: true,  subjects: { math: 77, science: 83, english: 79, history: 81, computer: 76 } },
  { id: 19, name: "Nikhil Tiwari",  age: 22, grade: "A", passed: true,  subjects: { math: 89, science: 86, english: 84, history: 88, computer: 92 } },
  { id: 20, name: "Shruti Kulkarni",age: 21, grade: "C", passed: true,  subjects: { math: 64, science: 69, english: 66, history: 71, computer: 60 } }
];


// ============================================
//   HELPER — Calculate total marks of student
// ============================================

function getTotalMarks(student) {
  return Object.values(student.subjects)
    .reduce((total, marks) => total + marks, 0);
}

function getAvgMarks(student) {
  const total = getTotalMarks(student);
  return (total / Object.keys(student.subjects).length).toFixed(2);
}


// ============================================
// QUERY 1 — Top 5 Scorers
// ============================================

console.log("========================================");
console.log("       QUERY 1 — TOP 5 SCORERS         ");
console.log("========================================");

const top5 = students
  .map(student => ({
    name:    student.name,
    total:   getTotalMarks(student),
    average: getAvgMarks(student),
    grade:   student.grade
  }))
  .sort((a, b) => b.total - a.total)  // sort highest first
  .slice(0, 5);                        // take top 5

top5.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} — Total: ${student.total} | Avg: ${student.average} | Grade: ${student.grade}`);
});


// ============================================
// QUERY 2 — Bottom 5 Scorers
// ============================================

console.log("\n========================================");
console.log("       QUERY 2 — BOTTOM 5 SCORERS      ");
console.log("========================================");

const bottom5 = students
  .map(student => ({
    name:    student.name,
    total:   getTotalMarks(student),
    average: getAvgMarks(student),
    grade:   student.grade
  }))
  .sort((a, b) => a.total - b.total)  // sort lowest first
  .slice(0, 5);

bottom5.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} — Total: ${student.total} | Avg: ${student.average} | Grade: ${student.grade}`);
});


// ============================================
// QUERY 3 — Subject Averages
// ============================================

console.log("\n========================================");
console.log("       QUERY 3 — SUBJECT AVERAGES       ");
console.log("========================================");

const subjects = ["math", "science", "english", "history", "computer"];

const subjectAverages = subjects.map(subject => {
  const total = students.reduce((sum, student) => {
    return sum + student.subjects[subject];
  }, 0);

  const average = (total / students.length).toFixed(2);
  return { subject, average };
});

subjectAverages.forEach(({ subject, average }) => {
  console.log(`${subject.padEnd(10)} — Average: ${average}`);
});

// Best and worst subject
const bestSubject  = subjectAverages.sort((a, b) => b.average - a.average)[0];
const worstSubject = subjectAverages[subjectAverages.length - 1];

console.log(`\n🏆 Best Subject  : ${bestSubject.subject} (${bestSubject.average})`);
console.log(`📉 Worst Subject : ${worstSubject.subject} (${worstSubject.average})`);


// ============================================
// QUERY 4 — Pass / Fail Count
// ============================================

console.log("\n========================================");
console.log("       QUERY 4 — PASS / FAIL COUNT      ");
console.log("========================================");

const passedStudents = students.filter(s => s.passed);
const failedStudents = students.filter(s => !s.passed);

console.log(`Total Students : ${students.length}`);
console.log(`Passed         : ${passedStudents.length}`);
console.log(`Failed         : ${failedStudents.length}`);
console.log(`Pass %         : ${((passedStudents.length / students.length) * 100).toFixed(1)}%`);
console.log(`Fail %         : ${((failedStudents.length / students.length) * 100).toFixed(1)}%`);

console.log("\n--- Failed Students ---");
failedStudents.forEach(s => {
  console.log(`❌ ${s.name} — Total: ${getTotalMarks(s)}`);
});


// ============================================
// QUERY 5 — Grade Distribution
// ============================================

console.log("\n========================================");
console.log("       QUERY 5 — GRADE DISTRIBUTION     ");
console.log("========================================");

const gradeCount = students.reduce((acc, student) => {
  acc[student.grade] = (acc[student.grade] || 0) + 1;
  return acc;
}, {});

Object.entries(gradeCount)
  .sort()
  .forEach(([grade, count]) => {
    const bar = "█".repeat(count);
    console.log(`Grade ${grade} : ${bar} (${count} students)`);
  });


// ============================================
// QUERY 6 — Topper Per Subject
// ============================================

console.log("\n========================================");
console.log("       QUERY 6 — TOPPER PER SUBJECT     ");
console.log("========================================");

subjects.forEach(subject => {
  const topper = students.reduce((best, student) => {
    return student.subjects[subject] > best.subjects[subject] ? student : best;
  });

  console.log(`${subject.padEnd(10)} — 🏆 ${topper.name} (${topper.subjects[subject]})`);
});


// ============================================
// QUERY 7 — Students Scoring Above Average
// ============================================

console.log("\n========================================");
console.log("  QUERY 7 — STUDENTS ABOVE OVERALL AVG  ");
console.log("========================================");

const overallAvg = students.reduce((sum, s) => sum + parseFloat(getAvgMarks(s)), 0) / students.length;
console.log(`Overall Class Average: ${overallAvg.toFixed(2)}\n`);

const aboveAvg = students
  .filter(s => parseFloat(getAvgMarks(s)) > overallAvg)
  .map(s => ({ name: s.name, average: getAvgMarks(s) }))
  .sort((a, b) => b.average - a.average);

aboveAvg.forEach(s => {
  console.log(`✅ ${s.name.padEnd(20)} — Avg: ${s.average}`);
});


// ============================================
// QUERY 8 — Student Search by Name
// ============================================

console.log("\n========================================");
console.log("       QUERY 8 — SEARCH STUDENT         ");
console.log("========================================");

function searchStudent(name) {
  const found = students.find(s =>
    s.name.toLowerCase().includes(name.toLowerCase())
  );

  if (!found) {
    console.log(`Student "${name}" not found!`);
    return;
  }

  console.log(`Name    : ${found.name}`);
  console.log(`Grade   : ${found.grade}`);
  console.log(`Status  : ${found.passed ? "✅ Passed" : "❌ Failed"}`);
  console.log(`Total   : ${getTotalMarks(found)}`);
  console.log(`Average : ${getAvgMarks(found)}`);
  console.log(`Subjects:`, found.subjects);
}

searchStudent("Neha");
console.log("---");
searchStudent("Meera");


// ============================================
// QUERY 9 — Check Class Performance
// ============================================

console.log("\n========================================");
console.log("       QUERY 9 — CLASS PERFORMANCE      ");
console.log("========================================");

const allPassed    = students.every(s => s.passed);
const anyDistinct  = students.some(s => parseFloat(getAvgMarks(s)) >= 90);
const anyFailed    = students.some(s => !s.passed);

console.log(`All students passed?         : ${allPassed   ? "Yes ✅" : "No ❌"}`);
console.log(`Any student with avg >= 90?  : ${anyDistinct ? "Yes ✅" : "No ❌"}`);
console.log(`Any student failed?          : ${anyFailed   ? "Yes ❌" : "No ✅"}`);


// ============================================
// QUERY 10 — Full Summary Report
// ============================================

console.log("\n========================================");
console.log("       QUERY 10 — FULL SUMMARY          ");
console.log("========================================");

const highestScorer = students.reduce((best, s) =>
  getTotalMarks(s) > getTotalMarks(best) ? s : best
);

const lowestScorer = students.reduce((worst, s) =>
  getTotalMarks(s) < getTotalMarks(worst) ? s : worst
);

const classTotal = students.reduce((sum, s) => sum + getTotalMarks(s), 0);
const classAvg   = (classTotal / students.length).toFixed(2);

console.log(`Total Students    : ${students.length}`);
console.log(`Class Average     : ${classAvg}`);
console.log(`Highest Scorer    : ${highestScorer.name} (${getTotalMarks(highestScorer)})`);
console.log(`Lowest Scorer     : ${lowestScorer.name} (${getTotalMarks(lowestScorer)})`);
console.log(`Passed            : ${passedStudents.length}`);
console.log(`Failed            : ${failedStudents.length}`);