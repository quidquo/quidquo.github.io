//Retrieve committee list data set and store it as an array of objects. Placeholder data is here now.
var committee = [
  {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Molly Doe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "6356",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  },    {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Morgan Doe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "11474",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  },   {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Megan Doe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "11455",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  },   {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "James Doeforth",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "2427",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  },   {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "John Doeverstein",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "119443",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  },   {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Michael Doe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "5185",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  }, {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Joe Doe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "5173",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  }, {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Zach Doe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "2402",
    county: "Cedar",
    district: "0",
    election_year: "2014",
    office_sought: "Recorder",
    party: "Republican",
    treasurer_address: "220 Vermont Ave",
    treasurer_city_state_zip: "Clarence IA   52216",
    treasurer_email: "melann724@gmail.com",
    treasurer_name: "Melissa Helmold",
    treasurer_phone: "5632121793"
  }
];

//candidate selector variables
var candidateName = "";
var candidateCode = 0;

//Search the database for a candidate name
function oninputFunct(query) {
  document.getElementById("oninput-box-output").innerHTML ="";
   var x = query.toUpperCase();
  var y = [];
  var z = [];
  
  //list those names under the input box
  committee.forEach(function(val){
    if (val.candidate_name.toUpperCase().includes(x)){
    y.push(val.candidate_name.toUpperCase());
      z.push(val.committee_number);
  }
  });
  var nameList = document.getElementById("oninput-box-output");
  y.forEach(function(ind){
    if(x.length> 0 && document.getElementById("oninput-box-output").childElementCount < 5){
      var entry = document.createElement('li');
      entry.setAttribute("id", z[y.indexOf(ind)]);
    entry.appendChild(document.createTextNode(ind));
    nameList.appendChild(entry);
  }
  });
}

//select candidate when clicked
   document.getElementById("oninput-box-output").addEventListener("click",function(e) {
if(e.target && e.target.nodeName == "LI") {  
  
  //update candidate name and code
  candidateCode = e.target.id;
   candidateName = e.target.textContent;
  
  //clean up html search bar
  document.getElementById("myInput").value = candidateName;
  document.getElementById("oninput-box-output").innerHTML = "";
  document.getElementById("graphHead").innerHTML = candidateName+" Campaign Finance Graph";
  graphMaker(candidateName, candidateCode);
  //propogate graph
        }
    });

function graphMaker(candidateName, candidateCode)
{
  //variables for graph propogation
  var smallContributions = 0;
  var largeContributions = 0;
  var companyContributions = 0;
  var partyContributions = 0;
  var companyTotals = [];
  var individualTotals = [];

  //filter the external file for just the selected candidate's data
var xhReq = new XMLHttpRequest();
var url="https://data.iowa.gov/resource/smfg-ds7h.json?committee_cd="+candidateCode;
xhReq.open("GET", url, false);
xhReq.send(null);
var data = JSON.parse(xhReq.responseText);

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
      //push to array for later use in company list
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
    } 
      //large Individual Contributions
      else if (val.amount >= 200) {
      
      largeContributions += parseFloat(val.amount);
      //push to array for later use in big donor list
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
      //push to array for later use in big donor list
      var check = false;
      individualTotals.forEach(function(m) {
        if (val.first_nm == m[0] && val.last_nm == m[1]) {
          m[2] += parseFloat(val.amount);
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
      ["Individual Donations >=$200", largeContributions],
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

  //sort individualTotals
  function Comparator(a, b) {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
  }

  individualTotals.sort(Comparator);
console.log(individualTotals);
  //sort companyTotals

  function Changer(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  }

  companyTotals.sort(Changer);
console.log(companyTotals);
  //list top 5 companies
  var i;
  for (i = 0; i < 4; i++) {
    if (companyTotals[i]) {
      var compList = document.getElementById("company");
        var ent = document.createElement('li');
      ent.appendChild(document.createTextNode(companyTotals[i][0]+" "+companyTotals[i][1]+" $"+companyTotals[i][2]));
      compList.appendChild(ent);
    }
  }

  //list top 5 individual contributors
  var j;
  for (j = 0; j < 4; j++) {
    if (individualTotals[j]) {
      var indList = document.getElementById("individual");
        var entr = document.createElement('li');
      entr.appendChild(document.createTextNode(individualTotals[j][0] + " "+individualTotals[j][1]+ " $"+individualTotals[j][2]));
      indList.appendChild(entr);
    }
  }
}

