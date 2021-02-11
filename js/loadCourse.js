let courseNumber = ["CS5010", "CS5800", "CS5600", "CS6200", "CS5200", "CS6140"];
let courseNames = [
  "Programming Design Pattern",
  "Algorithm",
  "Computer System",
  "Information Retrieval",
  "Database Management System",
  "Machine Learning",
];
let ongoingNumber = ["CS5850", "CS5610"];
let ongoingNames = ["Game Engine Design", "Web Development"];

function loadCourses() {
  var courseTitle = document.getElementsByClassName("course-title row")[0];
  for (var i = 0; i < courseNumber.length; i++) {
    var newRow = document.createElement("div");
    newRow.className = "row";

    var courseId = document.createElement("div");
    courseId.className = "col-4";
    courseId.textContent = courseNumber[i];
    var courseName = document.createElement("div");
    courseName.className = "col-4";
    courseName.textContent = courseNames[i];

    newRow.appendChild(courseId);
    newRow.appendChild(courseName);
    courseTitle.appendChild(newRow);
  }
}

function loadOngoingCourses() {
  var ongoingCourseTitle = document.getElementsByClassName(
    "ongoing-course row"
  )[0];

  for (var i = 0; i < ongoingNumber.length; i++) {
    var newRow = document.createElement("div");
    newRow.className = "row";

    var courseId = document.createElement("div");
    courseId.className = "col-4";
    courseId.textContent = ongoingNumber[i];
    var courseName = document.createElement("div");
    courseName.className = "col-4";
    courseName.textContent = ongoingNames[i];

    newRow.appendChild(courseId);
    newRow.appendChild(courseName);
    ongoingCourseTitle.appendChild(newRow);
  }
}

loadCourses();
loadOngoingCourses();
