  let jobs =[
  {
    "id": 1,
    "company": "Mobile First Corp",
    "role": "React Native Developer",
    "location": "Remote",
    "type": "Full-time",
    "salary": "$130,000 - $175,000",
    "description": "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    "status": "not"
  },
  {
    "id": 2,
    "company": "WebFlow Agency",
    "role": "Web Designer & Developer",
    "location": "Los Angeles, CA",
    "type": "Part-time",
    "salary": "$80,000 - $120,000",
    "description": "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    "status": "not"
  },
  {
    "id": 3,
    "company": "DataViz Solutions",
    "role": "Data Visualization Specialist",
    "location": "Boston, MA",
    "type": "Full-time",
    "salary": "$125,000 - $165,000",
    "description": "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    "status": "not"
  },
  {
    "id": 4,
    "company": "CloudFirst Inc",
    "role": "Backend Developer",
    "location": "Seattle, WA",
    "type": "Full-time",
    "salary": "$140,000 - $190,000",
    "description": "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    "status": "not"
  },
  {
    "id": 5,
    "company": "Innovation Lab",
    "role": "UI/UX Engineer",
    "location": "Austin, TX",
    "type": "Full-time",
    "salary": "$110,000 - $150,000",
    "description": "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend expertise required.",
    "status": "not"
  },
  {
    "id": 6,
    "company": "MegaCorp Solutions",
    "role": "JavaScript Developer",
    "location": "New York, NY",
    "type": "Full-time",
    "salary": "$120,000 - $170,000",
    "description": "Build enterprise applications with JavaScript and modern frameworks. Competitive salary, health insurance, and growth opportunities.",
    "status": "not"
  },
  {
    "id": 7,
    "company": "StartupXYZ",
    "role": "Full Stack Engineer",
    "location": "Remote",
    "type": "Full-time",
    "salary": "$120,000 - $160,000",
    "description": "Join our fast-growing startup and work on core platform. Experience with Node.js and React required.",
    "status": "not"
  },
  {
    "id": 8,
    "company": "TechCorp Industries",
    "role": "Senior Frontend Developer",
    "location": "San Francisco, CA",
    "type": "Full-time",
    "salary": "$130,000 - $175,000",
    "description": "Develop scalable web applications using React and TypeScript. Work with a talented team on cutting-edge products.",
    "status": "not"
  }
]

  // let jobs = [
  //   { id: 1, title: "Frontend Developer", company: "ABC Corp", status: "not" },
  //   { id: 2, title: "Backend Developer", company: "XYZ Ltd", status: "not" },
  //   { id: 3, title: "UI Designer", company: "DesignPro", status: "not" }
  // ];

  let currentFilter = "all";

  function renderJobs() {
    const list = document.getElementById("jobList");
    list.innerHTML = "";

    let filtered = jobs.filter(job => {
      if (currentFilter === "all") return true;
      return job.status === currentFilter;
    });

    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty">No jobs available</div>`;
      return;
    }

    filtered.forEach(job => {
      const div = document.createElement("div");
      div.className = "job-card";

      div.innerHTML = `
        <button class="btn delete" onclick="deleteJob(${job.id})">Delete</button>
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

  function setInterview(id) {
    jobs = jobs.map(job =>
      job.id === id ? { ...job, status: "interview" } : job
    );
    renderJobs();
  }

  function setRejected(id) {
    jobs = jobs.map(job =>
      job.id === id ? { ...job, status: "rejected" } : job
    );
    renderJobs();
  }

  function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
  }

  function updateStats() {
    document.getElementById("total").innerText = jobs.length;
    document.getElementById("interview").innerText =
      jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejected").innerText =
      jobs.filter(j => j.status === "rejected").length;
  }

  // Tabs
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      renderJobs();
    });
  });

  renderJobs()