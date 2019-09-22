//make the spotlight work
$(document).on('mousemove', function(e){
  $('#cursor').css({
     left:  e.pageX-75,
     top:   e.pageY-75
  });
});

//Retrieve committee list data set and store it as an array of objects. Placeholder data is here now.
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "https://data.iowa.gov/resource/t3k4-yym7.json", false);
xhReq.send(null);
var committee = JSON.parse(xhReq.responseText);

//candidate selector variables
var entityName = "";
var entityCode = 0;

//Search the database for an entity name
function oninputFunct(query) {
  document.getElementById("oninput-box-output").innerHTML ="";
   var x = query.toUpperCase();
  var y = [];
  var z = [];
  
  //list those names under the input box
  committee.forEach(function(val){
    if (val.committee_name && val.committee_name.toUpperCase().includes(x)){
    y.push(val.committee_name.toUpperCase());
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
  var caption = document.createElement('li');
  caption.setAttribute("id", "cap");
  caption.appendChild(document.createTextNode("Company/Entity Name"));
  nameList.prepend(caption);
}

//select candidate when clicked
   document.getElementById("oninput-box-output").addEventListener("click",function(e) {
if(e.target && e.target.nodeName == "LI" && e.target.id !== "cap") {  
  
  //update candidate name and code
  entityCode = e.target.id;
   entityName = e.target.textContent;
  
  //clean up html search bar
  document.getElementById("myInput").value = entityName;
  document.getElementById("oninput-box-output").innerHTML = "";
  document.getElementById("sum").innerHTML = "";
  document.getElementById("recipients").innerHTML = "";
  //propogate summaries
  var q = document.getElementById("entityInfo");
  q.style.display = "block";
  summMaker(entityName, entityCode);
        }
    });


function summMaker(entityName, entityCode)
{
  //variables for summary propogation
  var totalContributions = 0;
  var candidateTotals = [];

  //filter the external file for just the selected entity's data
var url="https://data.iowa.gov/resource/smfg-ds7h.json?contr_committee_cd="+entityCode+"&$limit=50000";
xhReq.open("GET", url, false);
xhReq.send(null);
var data = JSON.parse(xhReq.responseText);

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
  document.getElementById("sum").innerHTML = entityName+" has contributed a total of $"+totalContributions.toLocaleString('en', {maximumSignificantDigits : 21});

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
      entr.appendChild(document.createTextNode(candidateTotals[j][1]+ " $"+candidateTotals[j][2].toLocaleString('en', {maximumSignificantDigits : 2})));
      indList.appendChild(entr);
    }
  }
}

