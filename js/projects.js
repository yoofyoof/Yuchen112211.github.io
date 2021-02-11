let finalData = {};

function parseInternship(internship) {
  let newRow = document.createElement("div");
  newRow.className = "internship row";
  let company = internship.Company;
  let job = internship.Job;
  let location = internship.Location;
  let time = internship.Time;

  let companyElement = document.createElement("div");
  companyElement.className = "internship-sub col-3";
  companyElement.textContent = company;

  let jobElement = document.createElement("div");
  jobElement.className = "internship-sub col-3";
  jobElement.textContent = job;

  let locationElement = document.createElement("div");
  locationElement.className = "internship-sub col-3";
  locationElement.textContent = location;

  let timeElement = document.createElement("div");
  timeElement.className = "internship-sub col-3";
  timeElement.textContent = time;

  newRow.appendChild(companyElement);
  newRow.appendChild(jobElement);
  newRow.appendChild(locationElement);
  newRow.appendChild(timeElement);
  return newRow;
}

function parseProject(project) {
  let newRow = document.createElement("div");
  newRow.className = "project row";
  let title = project.Title;
  let area = project.Area;
  let location = project.Location;
  let type = project.Type;

  let titleElement = document.createElement("div");
  titleElement.className = "project-sub col-3";
  titleElement.textContent = title;

  let areaElement = document.createElement("div");
  areaElement.className = "project-sub col-3";
  areaElement.textContent = area;

  let locationElement = document.createElement("div");
  locationElement.className = "project-sub col-3";
  locationElement.textContent = location;

  let typeElement = document.createElement("div");
  typeElement.className = "project-sub col-3";
  typeElement.textContent = type;

  newRow.appendChild(titleElement);
  newRow.appendChild(areaElement);
  newRow.appendChild(locationElement);
  newRow.appendChild(typeElement);
  return newRow;
}

async function parseData() {
  const res = await fetch("../content/information.json");
  const tmp = await res.json();

  let internshipRow = document.getElementsByClassName("internships")[0];
  let internships = tmp.Internship;
  for (var i = 0; i < internships.length; i++) {
    let newRow = parseInternship(internships[i]);
    internshipRow.appendChild(newRow);
  }

  let projectRow = document.getElementsByClassName("projects")[0];
  let projects = tmp.Projects;
  for (var i = 0; i < projects.length; i++) {
    let newRow = parseProject(projects[i]);
    projectRow.appendChild(newRow);
  }
}

parseData();
