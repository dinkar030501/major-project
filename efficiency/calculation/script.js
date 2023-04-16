document.getElementById("calculate-btn").addEventListener("click", calculate);

function calculate() {
  // Get input values
  var outputPerHour = parseFloat(
    document.getElementById("output-per-hour").value
  );
  var revenuePerEmployee = parseFloat(
    document.getElementById("revenue-per-employee").value
  );
  var costPerUnit = parseFloat(document.getElementById("cost-per-unit").value);
  var turnaroundTime = parseFloat(
    document.getElementById("turnaround-time").value
  );
  var timeSaved = parseFloat(document.getElementById("time-saved").value);

  // Calculate efficiency metrics
  var revenuePerHour = revenuePerEmployee / (outputPerHour / 60);
  var profitMargin = ((revenuePerEmployee - costPerUnit) / costPerUnit) * 100;
  var cycleTime = turnaroundTime + timeSaved;
  var throughputTime =
    cycleTime / (1 - (outputPerHour / 60) * (turnaroundTime / 60));

  // Update chart with data
  updateChart([revenuePerHour, profitMargin, throughputTime]);
}

function updateChart(data) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Revenue per Hour", "Profit Margin", "Throughput Time"],
      datasets: [
        {
          label: "Value",
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
            },
          },
        ],
      },
    },
  });
}
