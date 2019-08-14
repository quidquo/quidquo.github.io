document.getElementById("blah").innerHTML = "New text!";

var data = [
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "40",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",
    committee_nm: "Iverson For Senate",
    contr_committee_cd: "9160",
    date: "2003-01-02T00:00:00.000",
    organization_nm: "Koch Bros",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  },
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "150",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",
    committee_nm: "Iverson For Senate",
    contr_committee_cd: "960",
    date: "2003-01-02T00:00:00.000",
    organization_nm: "Iowa Industry Political Action Committee or IIPAC",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  },
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "150",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",
    committee_nm: "Iverson For Senate",
    contr_committee_cd: "9160",
    date: "2003-01-02T00:00:00.000",
    organization_nm: "Iowa Industry Political Action Committee or IIPAC",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  },
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "150",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",
    committee_nm: "Iverson For Senate",
    contr_committee_cd: "9161",
    date: "2003-01-02T00:00:00.000",
    organization_nm: "Iowa Industry Political Action Committee or IIPAC",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  },
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "1500",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",
    committee_nm: "Iverson For Senate",

    date: "2003-01-02T00:00:00.000",
    first_nm: "Steve",
    last_nm: "Smith",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  },
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "150",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",

    date: "2003-01-02T00:00:00.000",
    first_nm: "Steve",
    last_nm: "Smith",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  },
  {
    address_line_1: "Iowa Assn. of Business and Industry",
    address_line_2: "400 E. Court Ave., Ste 100",
    amount: "170",
    city: "Des Moines",
    city_coordinates_zip: "50309-2027",
    committee_cd: "931",

    date: "2003-01-02T00:00:00.000",
    first_nm: "Billy",
    last_nm: "Bob",
    state_cd: "IA",
    transaction_id: "{18080320-0219-0050-1796-000000000000}",
    transaction_type: "CON",
    zip: "50309-2027"
  }
];

var committee = [
  {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Melissa Helmold",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "18644",
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
  },  {
    candidate_address: "220 Vermont Ave",
    candidate_city_state_zip: "Clarence IA   52216",
    candidate_email: "melann724@gmail.com",
    candidate_name: "Joe",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "18644",
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
    candidate_name: "Melony",
    candidate_phone: "5632121793",
    committee_name: "Melissa Helmold for Recorder",
    committee_number: "18644",
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

var arr = [
  "anagrams-of-string-(with-duplicates)",
  "array-concatenation",
  "array-difference",
  "array-includes",
  "array-intersection",
  "array-remove",
  "array-sample",
  "array-union",
  "array-without",
  "array-zip",
  "average-of-array-of-numbers",
  "bottom-visible",
  "capitalize-first-letter-of-every-word",
  "capitalize-first-letter",
  "chain-asynchronous-functions",
  "check-for-palindrome",
  "chunk-array",
  "collatz-algorithm",
  "compact",
  "count-occurrences-of-a-value-in-array",
  "current-URL",
  "curry",
  "deep-flatten-array",
  "distance-between-two-points",
  "divisible-by-number",
  "drop-elements-in-array",
  "element-is-visible-in-viewport",
  "escape-regular-expression",
  "even-or-odd-number",
  "factorial",
  "fibonacci-array-generator",
  "fill-array",
  "filter-out-non-unique-values-in-an-array",
  "flatten-array-up-to-depth",
  "flatten-array",
  "get-days-difference-between-dates",
  "get-max-value-from-array",
  "get-min-value-from-array",
  "get-native-type-of-value",
  "get-scroll-position",
  "greatest-common-divisor-(GCD)",
  "group-by",
  "hamming-distance",
  "head-of-list",
  "hexcode-to-RGB",
  "initial-of-list",
  "initialize-array-with-range",
  "initialize-array-with-values",
  "is-array",
  "is-boolean",
  "is-function",
  "is-number",
  "is-string",
  "is-symbol",
  "last-of-list",
  "measure-time-taken-by-function",
  "median-of-array-of-numbers",
  "nth-element-of-array",
  "number-to-array-of-digits",
  "object-from-key-value-pairs",
  "object-to-key-value-pairs",
  "ordinal-suffix-of-number",
  "percentile",
  "pick",
  "pipe",
  "powerset",
  "promisify",
  "random-integer-in-range",
  "random-number-in-range",
  "redirect-to-URL",
  "reverse-a-string",
  "RGB-to-hexadecimal",
  "round-number-to-n-digits",
  "run-promises-in-series",
  "scroll-to-top",
  "shallow-clone-object",
  "shuffle-array",
  "similarity-between-arrays",
  "sleep",
  "sort-characters-in-string-(alphabetical)",
  "speech-synthesis-(experimental)",
  "standard-deviation",
  "sum-of-array-of-numbers",
  "swap-values-of-two-variables",
  "tail-of-list",
  "take-right",
  "take",
  "truncate-a-string",
  "unique-values-of-array",
  "URL-parameters",
  "UUID-generator",
  "validate-email",
  "validate-number",
  "value-or-default",
  "write-json-to-file"
];

  //req=new XMLHttpRequest();
  //url="https://data.iowa.gov/resource/fbcf-6uqr.json"
  //req.open("GET",url,true);
  //req.send();
  //req.onload=function(){
  //  json=JSON.parse();
  //};

  //candidate search feature.
  
  //    let resultList = document.querySelector(".result");
  //    resultList.innerHTML = "";
  //   arr.map(function(algo){
  //      query.split(" ").map(function (word){
  //         if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
  //               resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
  //
  //           }
  //       })
  //   })
  //}
  //  updateResult("");

function oninputFunct(query) {
   var x = query.toUpperCase().split("");
  committee.forEach(function(val){
    var y = val.candidate_name.toUpperCase().split("");
var i;
for (i = 0; i < x.length; i++) { 
   if (x[i]==y[i]){
 document.getElementById("oninput-box-output").innerHTML = "<li id='new'>" + val.candidate_name+"</li>";
   }
  else if(i>0){
    var element= document.getElementById('new');
    element.parentNode.removeChild(element);
    i=5;
  }
  else i=5;
  }
  });
}

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

  //sort individualTotals
  function Comparator(a, b) {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
  }

  individualTotals.sort(Comparator);

  //sort companyTotals

  function Changer(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  }

  companyTotals.sort(Changer);

  //list top 5 companies
  var i;
  for (i = 0; i < 4; i++) {
    if (companyTotals[i]) {
      $("#company").html(
        "<li>" + companyTotals[i][0] + " $" + companyTotals[i][1] + "</li>"
      );
    }
  }

  //list top 5 individual contributors
  var j;
  for (j = 0; j < 4; j++) {
    if (individualTotals[j]) {
      $("#individual").html(
        "<li>" +
          individualTotals[j][0] +
          " " +
          individualTotals[j][1] +
          " $" +
          individualTotals[j][2] +
          "</li>"
      );
    }
  }

