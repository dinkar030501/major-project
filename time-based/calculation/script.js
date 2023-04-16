function calculate() {
  // Get input values
  var totalHours = parseFloat(document.getElementById("total-hours").value);
  var timeOnTasks = parseFloat(document.getElementById("time-on-tasks").value);
  var avgTaskTime = parseFloat(document.getElementById("avg-task-time").value);
  var timeToResolve = parseFloat(
    document.getElementById("time-to-resolve").value
  );

  // Calculate time-based metrics
  var productivityRate = (timeOnTasks / totalHours) * 100;
  var taskCompletionRate = (avgTaskTime / totalHours) * 100;
  var customerIssueRate = (timeToResolve / totalHours) * 100;

  // Update paragraph with data
  const resultsDiv = document.querySelector("#results");

  resultsDiv.innerHTML = `
    <p>Time Spent on Tasks: ${productivityRate}%</p>
    <p>Average Task Completion Time: ${taskCompletionRate} hours</p>
    <p>Time to Resolve Customer Issues: ${customerIssueRate} hours</p>
  `;
  // Update chart with data
  updateChart([productivityRate, taskCompletionRate, customerIssueRate]);
}

function updateChart(data) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Productivity Rate",
        "Task Completion Rate",
        "Customer Issue Rate",
      ],
      datasets: [
        {
          label: "Percentage",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 100,
            },
          },
        ],
      },
    },
  });
}
