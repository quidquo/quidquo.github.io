//Search the database for a candidate name
function oninputFunct(query) {
//Retrieve committee list data set and store it as an array of objects
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "https://mydata.iowa.gov/resource/5dtu-swbk.json?$limit=5000", false);
xhReq.send(null);
var committee = JSON.parse(xhReq.responseText);

//candidate selector variables
var candidateName = "";
var candidateCode = 0;

  document.getElementById("oninput-box-output").innerHTML ="";
   var x = query.toUpperCase();
  var y = [];
  var z = [];
  var office =[];

   
  //list those names under the input box
  committee.forEach(function(val){
    if (val.candidate_name && val.candidate_name.toUpperCase().includes(x)){
    y.push(val.candidate_name.toUpperCase());
      z.push(val.committee_number);
      office.push(val.office_sought);
  }
  });
  var nameList = document.getElementById("oninput-box-output");
  y.forEach(function(ind){
    if(x.length> 0 && document.getElementById("oninput-box-output").childElementCount < 5){
      var entry = document.createElement('li');
      entry.setAttribute("id", z[y.indexOf(ind)]);
      entry.appendChild(document.createTextNode(ind+", "+office[y.indexOf(ind)]));
      nameList.appendChild(entry);
  }
  });
  var caption = document.createElement('li');
  caption.setAttribute("id", "cap");
  caption.appendChild(document.createTextNode("Candidate Name, Office Sought"));
  nameList.prepend(caption);
}

function retrieveCandInfo (candidateCode, candidateName){
  //clean up html search bar
  document.getElementById("myInput").value = candidateName;
  document.getElementById("oninput-box-output").innerHTML = "";
  document.getElementById("individual").innerHTML = "";
  document.getElementById("company").innerHTML = "";
  document.getElementById("graphHead").innerHTML = candidateName+" Campaign Finance Graph";
  //propogate graph
  var q = document.getElementById("candidateInfo");
  q.style.display = "block";
  graphMaker(candidateName, candidateCode);
  }

//select candidate when clicked
document.getElementById("oninput-box-output").addEventListener("click",function(e) {
  if(e.target && e.target.nodeName == "LI" && e.target.id !== "cap") {  
    
    //update candidate name and code
    candidateCode = e.target.id;
     candidateName = e.target.textContent;
     retrieveCandInfo(candidateCode, candidateName);
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
  var url="https://data.iowa.gov/resource/smfg-ds7h.json?committee_cd="+candidateCode+"&$limit=50000";
  var xhReq = new XMLHttpRequest();
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
      } 
       //companies
       else if (val.organization_nm) {
       
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
          var id = "0";
          if(val.contr_committee_cd){
            id = val.contr_committee_cd.toString(10);
          }
          companyTotals.push([val.organization_nm, parseFloat(val.amount), id]);
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
        height: 300,
        chartArea: {left: 10, top: 50, width:'80%',height:'80%'},
        title: candidateName
      };
      var chart = new google.visualization.PieChart(
        document.getElementById("piechart")
      );
  
      chart.draw(data, options);
    }
  
    //sort individualTotals
    function Comparator(a, b) {
      if (parseFloat(a[2]) > parseFloat(b[2])) return -1;
      if (parseFloat(a[2]) < parseFloat(b[2])) return 1;
      return 0;
    }
  
    individualTotals.sort(Comparator);
    //sort companyTotals
  
    function Changer(a, b) {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    }
  
    companyTotals.sort(Changer);
    //list top 10 companies
    var i;
    for (i = 0; i < 10; i++) {
      if (companyTotals[i]) {
        var compList = document.getElementById("company");
          var ent = document.createElement('li');
          if(companyTotals[i][2] === "0"){
            ent.setAttribute("class", "bad");
          }
          else{
            ent.setAttribute("class", "good");
          }
          ent.setAttribute("id", companyTotals[i][2]);
        ent.appendChild(document.createTextNode(companyTotals[i][0]+" $"+companyTotals[i][1].toLocaleString('en', {maximumSignificantDigits : 2})));
        compList.appendChild(ent);
      }
    }
    //list top 5 individual contributors
    var j;
    for (j = 0; j < 5; j++) {
      if (individualTotals[j]) {
        var indList = document.getElementById("individual");
          var entr = document.createElement('li');
        entr.appendChild(document.createTextNode(individualTotals[j][0] + " "+individualTotals[j][1]+ " $"+individualTotals[j][2].toLocaleString('en', {maximumSignificantDigits : 2})));
        indList.appendChild(entr);
      }
    }
  }  

  var entityCode = 0;
  var entityName = "";

  function summMaker(entityName, entityCode)
{
  //variables for summary propogation
  var totalContributions = 0;
  var candidateTotals = [];

  //filter the external file for just the selected entity's data
var url="https://data.iowa.gov/resource/smfg-ds7h.json?contr_committee_cd="+entityCode+"&$limit=50000";
var xhReqe = new XMLHttpRequest();
xhReqe.open("GET", url, false);
xhReqe.send(null);
var data = JSON.parse(xhReqe.responseText);

  //calculate sums of amounts for candidate list
  data.forEach(function(val) {
      totalContributions += parseFloat(val.amount);
      //push to array for later use in candidate list
      var check = false;
      candidateTotals.forEach(function(x) {
        if (val.committee_cd == x[0]) {
          x[2] += parseFloat(val.amount);
          check = true;
        }
      });
      if (check === false) {
        candidateTotals.push([
          val.committee_cd,
          val.committee_nm,
          parseFloat(val.amount)
        ]);
      }
  });

  //list total
  document.getElementById("sum").innerHTML = entityName+" has contributed a total of $"+totalContributions.toLocaleString('en', {maximumSignificantDigits : 2});

  //sort candidateTotals
  function Comparator(a, b) {
    if (parseFloat(a[2]) > parseFloat(b[2])) return -1;
    if (parseFloat(a[2]) < parseFloat(b[2])) return 1;
    return 0;
  }

  candidateTotals.sort(Comparator);
  
  //list top 10 recipients
  var j;
  for (j = 0; j < 10; j++) {
    if (candidateTotals[j]) {
      var indList = document.getElementById("recipients");
        var entr = document.createElement('li');
        entr.setAttribute("class", "candCom")
        entr.setAttribute("id", candidateTotals[j][0]);
      entr.appendChild(document.createTextNode(candidateTotals[j][1]+ " $"+candidateTotals[j][2].toLocaleString('en', {maximumSignificantDigits : 2})));
      indList.appendChild(entr);
    }
  }
}

  function retrieveEntInfo (entityCode, entityName){
    //clean up html search bar
    document.getElementById("myInputEnt").value = entityName;
    document.getElementById("oninput-box-output-ent").innerHTML = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("recipients").innerHTML = "";
    //propogate summaries
    var q = document.getElementById("entityInfo");
    q.style.display = "block";
    summMaker(entityName, entityCode);
          }

//Search the database for an entity name
function oninputEntFunct(query) {

  //Retrieve committee list data set and store it as an array of objects.
var xhReqe = new XMLHttpRequest();
xhReqe.open("GET", "https://data.iowa.gov/resource/t3k4-yym7.json", false);
xhReqe.send(null);
var entCommittee = JSON.parse(xhReqe.responseText);

//candidate selector variables
  document.getElementById("oninput-box-output-ent").innerHTML ="";
   var a = query.toUpperCase();
  var b = [];
  var c = [];
  
  //list those names under the input box
  entCommittee.forEach(function(val){
    if (val.committee_name && val.committee_name.toUpperCase().includes(a)){
    b.push(val.committee_name.toUpperCase());
      c.push(val.committee_number);
  }
  });
  var nameList = document.getElementById("oninput-box-output-ent");
  b.forEach(function(ind){
    if(a.length> 0 && document.getElementById("oninput-box-output-ent").childElementCount < 5){
      var entry = document.createElement('li');
      entry.setAttribute("id", c[b.indexOf(ind)]);
      entry.appendChild(document.createTextNode(ind));
      nameList.appendChild(entry);
  }
  });
  var caption = document.createElement('li');
  caption.setAttribute("id", "cap");
  caption.appendChild(document.createTextNode("Company/Entity Name"));
  nameList.prepend(caption);
}

//select entity when clicked from search
   document.getElementById("oninput-box-output-ent").addEventListener("click",function(e) {
if(e.target && e.target.nodeName == "LI" && e.target.id !== "cap") {  
  
  //update entity name and code
  entityCode = e.target.id;
   entityName = e.target.textContent;

  retrieveEntInfo(entityCode, entityName);
}
    });

//select entity when clicked from company list above
document.getElementById("company").addEventListener("click",function(g) {
  if(g.target && g.target.nodeName == "LI" && g.target.id !== "0") {  
    
    //update entity name and code
    entityCode = parseInt(g.target.id, 10);
     entityName = g.target.textContent.substr(0, g.target.textContent.indexOf(' $'));
    retrieveEntInfo(entityCode, entityName);
    window.location.hash = "#listing";
  }
      });

//select candidate when clicked from candidate list below
document.getElementById("recipients").addEventListener("click",function(h) {
  if(h.target && h.target.nodeName == "LI") {  
    
    //update entity name and code
    candidateCode = parseInt(h.target.id, 10);
     candidateName = h.target.textContent.substr(0, h.target.textContent.indexOf(' $'));
    retrieveCandInfo(candidateCode, candidateName);
    window.location.hash = "#graphHead";
  }
      });


