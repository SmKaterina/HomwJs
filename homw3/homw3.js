let student = {
    table: {
        subject: [],
        mark: []
    }
}
student.name = prompt("Please enter your name: ");
student.surname = prompt("Please enter your surname: ");

let arr = [], summ = 0;

for (let i = 0; i < 100; i++) {
    let subject = prompt("Please enter your subject: ");
    let mark = Number(prompt("Please enter your subject mark: "));

    if (subject === null || mark === null) break;
    else {
        student.table.subject[i] = subject;
        student.table.mark[i] = mark;
    }
    if (student.table.mark[i] < 4) arr.push(i);
    summ += +student.table.mark[i];
}

let averageStudentMark = summ / student.table.mark.length;
if (averageStudentMark > 7) console.log("Student awarded a scholarship");
if (arr.length === 0) console.log("Student transferred to the next course");