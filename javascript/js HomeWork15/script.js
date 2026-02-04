let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const error = document.getElementById("error");

function getResult(marks) {
  if (marks >= 80) return { text: "Distinction", class: "green" };
  if (marks >= 60) return { text: "Pass", class: "blue" };
  if (marks >= 40) return { text: "Average", class: "yellow" };
  return { text: "Fail", class: "red" };
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
  studentList.innerHTML = "";

  students.forEach((student, index) => {
    const result = getResult(student.marks);

    studentList.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.marks}</td>
        <td><span class="badge ${result.class}">${result.text}</span></td>
        <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  saveToLocalStorage();
  renderStudents();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  error.textContent = "";

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const marks = document.getElementById("marks").value;

  if (!name || !age || !marks) {
    error.textContent = "All fields are required.";
    return;
  }

  if (age < 18) {
    error.textContent = "Students under 18 are not allowed.";
    return;
  }

  const student = {
    name,
    age: Number(age),
    marks: Number(marks)
  };

  students.push(student);
  saveToLocalStorage();
  renderStudents();
  form.reset();
});

// Load stored data on refresh
renderStudents();
