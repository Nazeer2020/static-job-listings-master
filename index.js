const sectionElement = document.querySelector("section");
const jobContainer = document.querySelector(".job-containe");

const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

loadingData(data);

// rendering data on the page function

function loadingData(data) {
  data.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "";
    newDiv.innerHTML = ` <div class="job-list-container">
                            <div class="details-container">
                              <div class="image-container">
                                <img src="${element.logo}" alt="photosnap" />
                              </div>
                          <div class="text-container">
                            <p>${element.company} ${
      element.new ? `<span>New!</span>` : ``
    } ${element.featured ? `<span>Featured</span></p>` : ``}

                              <p>${element.role}</p>
                              <p><span>${element.postedAt}</span><span>${
      element.contract
    }</span>
                              <span>${element.location}</span> </p>
                          </div>
                          </div>
                          <div class="btn-container">
                        ${element.languages
                          .map(
                            (item) =>
                              `<button class="filter_btn">${item}</button>`
                          )
                          .join("")}
                        </div>
                      </div>`;

    sectionElement.appendChild(newDiv);
  });
}

function renderingFilteredData(arr) {
  sectionElement.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `<div class="filter-container"> <div>${arr
    .map(
      (item) =>
        `<button class="btn">${item} <img src="./images/icon-remove.svg"/></button>`
    )
    .join("")} </div> <button class="clear_btn">clear</button></div>`;
  sectionElement.append(div);
}

let counter = 0;
const array = [];
const filterKeyword = [];
let filteredJobs;

// filter function

function filterData(param) {
  filterKeyword.push(param);
  if (counter === 0) {
    filteredJobs = data.filter((job) => job.languages.includes(String(param)));
    array.length = 0;
    array.push(...filteredJobs);
    counter++;
  } else {
    filteredJobs = array.filter((job) => job.languages.includes(String(param)));
    array.length = 0;

    array.push(...filteredJobs);
  }

  renderingFilteredData([...new Set(filterKeyword)]);

  loadingData(array);
}

// clearing the search

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("clear_btn")) {
    return "someting went wrong !";
  } else {
    sectionElement.innerHTML = "";
    array.length = 0;
    counter = 0;
    filterKeyword.length = 0;
    loadingData(data);
  }
});

// filter event listener

document.addEventListener("click", (e) => {
  if (
    e.target.closest(".btn-container") &&
    e.target.classList.contains("filter_btn")
  )
    filterData(e.target.innerHTML);
});

// clearing filter keys

document.addEventListener("click", (e) => {
  if (e.target.closest(".btn") || e.target.classList.contains("btn")) {
    const element = e.target.innerText || e.target.closest(".btn").innerText;

    const index = filterKeyword.indexOf(element);

    filterKeyword.splice(index, 1);

    const isArray = data.filter((item) => {
      return filterKeyword.every((skill) => item.languages.includes(skill));
    });

    renderingFilteredData(filterKeyword);
    loadingData(isArray);
  }
});
