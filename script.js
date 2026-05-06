  // const jobs = [
  //   { id: 1, title: "Frontend Developer", company: "ABC Corp", status: "not" },
  //   { id: 2, title: "Backend Developer", company: "XYZ Ltd", status: "not" },
  //   { id: 3, title: "UI Designer", company: "DesignPro", status: "not" }
  // ];
  let jobs = [
    { id: 1, title: "Frontend Developer", company: "ABC Corp", status: "not" },
    { id: 2, title: "Backend Developer", company: "XYZ Ltd", status: "not" },
    { id: 3, title: "UI Designer", company: "DesignPro", status: "not" }
  ];

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