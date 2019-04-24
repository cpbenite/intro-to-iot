setActivePage('nav_home');
document.getElementById("stats-generator").click();

if (document.querySelector('.jscolor').value == "000000") {
  document.getElementById("off-button").classList.add("disabled");
  document.getElementById("set-default-button").classList.add("disabled");
}
else {
  document.getElementById("off-button").classList.remove("disabled");
  document.getElementById("set-default-button").classList.remove("disabled");
}

function submit(setDefault=false, useDefault=false, turnOff=false) {
  // If any checkboxes are checked, display it on buttons
  if (setDefault == true) {
    document.getElementById("set-as-default").checked = true;
  }
  if (useDefault == true) {
    document.getElementById("change-to-default").checked = true;
  }
  if (turnOff == true) {
    document.getElementById("turn-off").checked = true;
  }

  // Submit color form
  document.getElementById("color-form").submit();
}


function renderChart(ctx, data) {
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        legend: {
          display: false,
        }
      }
  });
}

function analyze(temperatureData, humidityData, onData) {
  console.log("Inside Analyze function");
  var temperatureRenderData = {
    datasets: [{
      data: temperatureData,
      backgroundColor: ['#123456', '#999999', '#222222']
    }],

    labels: ['Hot', 'Comfortable', 'Cold']
  };

  var humidityRenderData = {
    datasets: [{
      data: humidityData,
      backgroundColor: ['#13763f', '#54a06b', '#b3d264']
    }],

    labels: ['Humid', 'Comfortable', 'Dry']
  };

  var onRenderData = {
    datasets: [{
      data: onData,
      backgroundColor: ['#13763f', '#54a06b']
    }],

    labels: ['On','Off']
  };

  for (var item in temperatureData) {
    console.log("temperatureData = " + item);
  }

  for (var item in humidityData) {
    console.log("humidityData = " + item);
  }

  for (var item in onData) {
    console.log("onData = " + item);
  }

   console.log("Temp: " + Array.isArray(temperatureData));
   console.log("Hum: " + humidityData);
   console.log("On: " + onData);

  renderChart(document.getElementById("temperature-chart"), temperatureRenderData);
  renderChart(document.getElementById("humidity-chart"), humidityRenderData);
  renderChart(document.getElementById("on-chart"), onRenderData);
}
