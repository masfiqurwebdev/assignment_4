const jobs = [
  {
    id: 1,
    company: "Junior Software Developer",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $110,000",
    description:
      "Junior Software Implementation Engineer - (For Codemen Solutions Limited) - Job ID - 1455446",
    status: "all",
  },

  {
    id: 2,
    company: "WebFlow Agency",
    position: "Frontend Developer",
    location: "Los Angeles",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description: "Create responsive UI and modern web experiences.",
    status: "all",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Analyst",
    location: "Boston",
    type: "Remote",
    salary: "$60,000 - $85,000",
    description: "Analyze data and generate insights for clients.",
    status: "all",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Work with Node.js and cloud infrastructure.",
    status: "all",
  },

  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Designer",
    location: "Austin",
    type: "Contract",
    salary: "$50/hr",
    description: "Design intuitive digital experiences.",
    status: "all",
  },

  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "Full Stack Developer",
    location: "New York",
    type: "Full-time",
    salary: "$95,000 - $130,000",
    description: "Develop scalable full stack applications.",
    status: "all",
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Junior Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $70,000",
    description: "Collaborate with senior engineers in product team.",
    status: "all",
  },
  {
    id: 8,
    company: "TechCore Industries",
    position: "Software Engineer",
    location: "San Francisco",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Build scalable enterprise applications.",
    status: "all",
  },
];

let currentFilter = "all";

function renderJobs() {
  const list = document.getElementById("jobList");
  list.innerHTML = "";

  let filtered = jobs.filter((job) => {
    if (currentFilter === "all") return true;
    return job.status === currentFilter;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
    <div class='empty'>No Jobs Available</div>
    <img src="/doc.png" alt="">
    
    `;
    return;
  }

  filtered.forEach((job) => {
    const div = document.createElement("div");
    div.className = "job-card";

    div.innerHTML = `
    <button class='btn delete' >Delete</button>
            <h4>${job.title}</h4>
        <p>${job.company}</p>

        <span class="status ${job.status}">
          ${getStatusText(job.status)}
        </span>

        <div>
          <button class="btn green" onclick="setInterview(${job.id})">Interview</button>
          <button class="btn red" onclick="setRejected(${job.id})">Reject</button>
        </div>
    `;
    list.appendChild(div);
  });
  updateStats();
}

function getStatusText(status) {
  if (status === "not") return "Not Applied";
  if (status === "interview") return "Interviewed";
  if (status === "rejected") return "Rejected";
}


function setInterview(id){
  jobs =jobs.map(job =>
    job.id === id ? { ...job ,status:'interview'} : job
  );
  renderJobs();
}


function setRe