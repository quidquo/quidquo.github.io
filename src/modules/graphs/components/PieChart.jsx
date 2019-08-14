var candidateName = "";
var candidateCode = 6160;
//from search of candidate, store candidate code in this variable. I set it temporarily.

//filter the json file for just the selected candidate's data
//var data = json.filter(function(val){
//  return (val.committee_cd==candidateCode);
//});

  var smallContributions = 0;
  var largeContributions = 0;
  var companyContributions = 0;
  var partyContributions = 0;
  var companyTotals = [];
  var individualTotals = [];

  //calculate sums of amounts for each variable in the pie chart
  data.forEach(function(val) {
    //stateParty
    if (
      val.contr_committee_cd === "9161" ||
      val.contr_committee_cd === "9098"
    ) {
      partyContributions += parseFloat(val.amount);
    } else if (val.contr_committee_cd) {
      //companies
      companyContributions += parseFloat(val.amount);
      //push to array for later use
      var check = false;
      companyTotals.forEach(function(x) {
        if (val.organization_nm == x[0]) {
          x[1] += parseFloat(val.amount);
          check = true;
        }
      });
      if (check === false) {
        companyTotals.push([val.organization_nm, parseFloat(val.amount)]);
      }
    } else if (val.amount >= 200) {
      //large Individual Contributions
      largeContributions += parseFloat(val.amount);
      //push to array for later use
      var check = false;
      individualTotals.forEach(function(x) {
        if (val.first_nm == x[0] && val.last_nm == x[1]) {
          x[2] += parseFloat(val.amount);
          check = true;
        }
      });
      if (check === false) {
        individualTotals.push([
          val.first_nm,
          val.last_nm,
          parseFloat(val.amount)
        ]);
      }
    } else {
      //smallContributions
      smallContributions += parseFloat(val.amount);
      //push to array for later use
      var check = false;
      individualTotals.forEach(function(x) {
        if (val.first_nm == x[0] && val.last_nm == x[1]) {
          x[2] += parseFloat(val.amount);
          check = true;
        }
      });
      if (check === false) {
        individualTotals.push([
          val.first_nm,
          val.last_nm,
          parseFloat(val.amount)
        ]);
      }
    }
  });

  //make a pie chart of values stored in smallContributions, largeContributions, companyContributions, and partyContributions

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Contributor", "Amount"],
      ["Individual Donations <$200", smallContributions],
      ["Individual Donations <=$200", largeContributions],
      ["Contributions from Companies or other entities", companyContributions],
      ["State Party Contributions", partyContributions]
    ]);
    var options = {
      title: candidateName
    };
    var chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );

    chart.draw(data, options);
  }
