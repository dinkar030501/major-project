// function to calculate goal-based metrics
function calculate() {
  // get input values
  var salesTargets = parseFloat(document.getElementById("sales-targets").value);
  var sales = parseFloat(document.getElementById("sales").value);
  var customerSatisfactionGoals = parseFloat(
    document.getElementById("customer-satisfaction-goals").value
  );
  var customerSatisfaction = parseFloat(
    document.getElementById("customer-satisfaction").value
  );
  var projectDeadlines = parseFloat(
    document.getElementById("project-deadlines").value
  );
  var completedProjects = parseFloat(
    document.getElementById("project-completed").value
  );
  var defects = parseFloat(document.getElementById("defects").value);
  var totalItems = parseFloat(document.getElementById("total-items").value);
  var attendanceGoals = parseFloat(
    document.getElementById("attendance-goals").value
  );

  var attendance = parseFloat(document.getElementById("attendance").value);
  // calculate goal-based metrics
  var salesPerformance = salesTargets > 0 ? (sales / salesTargets) * 100 : 0;
  var customerSatisfactionRate =
    (customerSatisfaction / customerSatisfactionGoals) * 100;
  var projectCompletionRate = (completedProjects / projectDeadlines) * 100;
  var qualityPerformance =
    defects > 0 ? ((totalItems - defects) / totalItems) * 100 : 100;
  var attendanceRate = (attendance / attendanceGoals) * 100;

  //update paragraph
  const resultsDiv = document.querySelector("#results");

  resultsDiv.innerHTML = `
    <p>Sales Achievement Rate: ${salesPerformance}%</p>
    <p>Customer Satisfaction Rate: ${customerSatisfactionRate}%</p>
    <p>Project Completion Rate: ${projectCompletionRate}%</p>
    <p>Quality Achievement Rate: ${qualityPerformance}%</p>
    <p>Attendance Achievement Rate: ${attendanceRate}%</p>
  `;
  // update chart with data
  updateChart([
    salesPerformance,
    customerSatisfactionRate,
    projectCompletionRate,
    qualityPerformance,
    attendanceRate,
  ]);
}

// function to update chart with data
function updateChart(data) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Sales Performance",
        "Customer Satisfaction Rate",
        "Project Completion Rate",
        "Quality Performance",
        "Attendance Rate",
      ],
      datasets: [
        {
          label: "Percentage",
          data: data,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 100,
        },
        width: 800,
      },
    },
  });
}
