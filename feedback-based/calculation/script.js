document.getElementById("calculate-btn").addEventListener("click", calculate);

function calculate() {
  // Get input values
  var customerSatisfaction = parseFloat(
    document.getElementById("customer-satisfaction").value
  );
  var threeSixtyFeedback = parseFloat(
    document.getElementById("360-feedback").value
  );
  var performanceReviews = parseFloat(
    document.getElementById("performance-reviews").value
  );
  var peerReviews = parseFloat(document.getElementById("peer-reviews").value);
  var employeeEngagement = parseFloat(
    document.getElementById("employee-engagement").value
  );

  // Calculate feedback metrics
  var feedbackScore =
    (customerSatisfaction +
      threeSixtyFeedback +
      performanceReviews +
      peerReviews +
      employeeEngagement) /
    5;
  var feedbackTrend = ((feedbackScore - 50) / 50) * 100;

  // Update chart with data
  updateChart([feedbackScore, feedbackTrend]);
}

function updateChart(data) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Feedback Score", "Feedback Trend"],
      datasets: [
        {
          label: "Percentage",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
            },
          },
        ],
      },
    },
  });
}
